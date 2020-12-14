import { GraphQLError } from "graphql";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { loginUser } from "./mutations/loginUser";
import AuthForm from "./AuthForm";
import { User } from "./Header";

interface Props extends RouteComponentProps {
  data: { user?: User } | undefined;
}
const Login: React.FC<Props> = props => {
  const [error, setError] = useState<readonly GraphQLError[] | undefined>();
  const [login] = useMutation(loginUser, {
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
    login({
      variables: data,
      refetchQueries: [{ query: currentUser }]
    });
  };
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={onSubmit} error={error} setError={setError} />
    </div>
  );
};

export default withRouter(Login);
