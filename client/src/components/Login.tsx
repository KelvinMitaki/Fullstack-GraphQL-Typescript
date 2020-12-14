import React from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { loginUser } from "../queries/loginUser";
import AuthForm from "./AuthForm";

const Login: React.FC<RouteComponentProps> = props => {
  const [login] = useMutation(loginUser, {
    awaitRefetchQueries: true,
    onCompleted: data => props.history.push("/")
  });
  const onLoginSubmit = (data: { email: string; password: string }) => {
    login({ variables: data, refetchQueries: [{ query: currentUser }] });
  };
  return (
    <div>
      <h2>Login</h2>
      <AuthForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default Login;
