import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { loginUser } from "../queries/loginUser";
import AuthForm from "./AuthForm";

const Login: React.FC<RouteComponentProps> = props => {
  const [error, setError] = useState<string | undefined>();
  const [login] = useMutation(loginUser, {
    awaitRefetchQueries: true,
    onCompleted: data => {
      props.history.push("/");
    },
    onError: err => setError(err.graphQLErrors[0].message)
  });
  const onLoginSubmit = async (data: { email: string; password: string }) => {
    const res = await login({
      variables: data,
      refetchQueries: [{ query: currentUser }]
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm
        onLoginSubmit={onLoginSubmit}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default Login;
