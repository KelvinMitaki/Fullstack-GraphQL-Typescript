import React from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { logoutUser } from "./mutations/logoutUser";
import styles from "./Header.module.css";

export interface User {
  email: string;
  _id: string;
}

interface Props extends RouteComponentProps {
  data: { user?: User } | undefined;
  loading: boolean;
}

const Header: React.FC<Props> = props => {
  const [logout] = useMutation(logoutUser, {
    awaitRefetchQueries: true,
    onCompleted: data => props.history.push("/login")
  });
  if (props.loading) {
    console.log({ loading: props.loading });
    return null;
  }
  if (props.data && props.data.user) {
    return (
      <div className={styles.header}>
        <h2 onClick={() => props.history.push("/")}>Home</h2>
        <div className={styles.login}>
          <p>Hello {props.data.user.email}</p>
          <button
            onClick={() => logout({ refetchQueries: [{ query: currentUser }] })}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.header}>
      <h2 onClick={() => props.history.push("/")}>Home</h2>
      <div className={styles.login}>
        <button onClick={() => props.history.push("/signup")}>Sign Up</button>
        <button onClick={() => props.history.push("/login")}>Login</button>
      </div>
    </div>
  );
};

export default withRouter(Header);
