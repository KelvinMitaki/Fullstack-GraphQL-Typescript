import { GraphQLError } from "graphql";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import AuthForm from "./AuthForm";
import { signupUser } from "./mutations/signUpUser";

const Signup: React.FC<RouteComponentProps> = props => {
  const [error, setError] = useState<readonly GraphQLError[] | undefined>();
  const [signup] = useMutation(signupUser, {
    awaitRefetchQueries: true,
    onCompleted: data => {
      props.history.push("/");
    },
    onError: err => setError(err.graphQLErrors)
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    signup({
      variables: data,
      refetchQueries: [{ query: currentUser }]
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm onSubmit={onSubmit} error={error} setError={setError} />
    </div>
  );
};

export default Signup;
