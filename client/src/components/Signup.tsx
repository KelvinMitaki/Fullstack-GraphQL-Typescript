import { GraphQLError } from "graphql";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import AuthForm from "./AuthForm";
import { User } from "./Header";
import { signupUser } from "./mutations/signUpUser";

interface Props extends RouteComponentProps {
  data: { user?: User } | undefined;
}

const Signup: React.FC<Props> = props => {
  const [error, setError] = useState<readonly GraphQLError[] | undefined>();
  const [signup] = useMutation(signupUser, {
    awaitRefetchQueries: true,
    onCompleted: data => {
      props.history.push("/");
    },
    onError: err => setError(err.graphQLErrors)
  });
  const data = props.data ? props.data.user : props.data;
  useEffect(() => {
    if (props.data && props.data.user) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [data]);

  const onSubmit = async (data: { email: string; password: string }) => {
    signup({
      variables: data,
      refetchQueries: [{ query: currentUser }]
    });
  };
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm onSubmit={onSubmit} error={error} setError={setError} />
    </div>
  );
};

export default withRouter(Signup);
