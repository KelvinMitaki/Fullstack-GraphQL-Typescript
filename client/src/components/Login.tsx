import { GraphQLError } from "graphql";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { loginUser } from "./mutations/loginUser";
import AuthForm from "./AuthForm";

const Login: React.FC<RouteComponentProps> = props => {
  const [error, setError] = useState<readonly GraphQLError[] | undefined>();
  const [login] = useMutation(loginUser, {
    awaitRefetchQueries: true,
    onCompleted: data => {
      props.history.push("/");
    },
    onError: err => setError(err.graphQLErrors)
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    login({
      variables: data,
      refetchQueries: [{ query: currentUser }]
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={onSubmit} error={error} setError={setError} />
    </div>
  );
};

export default Login;
