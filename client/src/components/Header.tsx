import React from "react";
import { useMutation, useQuery } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import { logoutUser } from "../queries/logoutUser";
import styles from "./Header.module.css";

const Header: React.FC<RouteComponentProps> = props => {
  const { data, loading } = useQuery<{ user?: { email: string; _id: string } }>(
    currentUser
  );
  const [logout] = useMutation(logoutUser, {
    onCompleted: data => props.history.push("/login")
  });
  if (loading) {
    console.log({ loading });
    return null;
  }
  if (data && data.user) {
    return (
      <div className={styles.header}>
        <h2 onClick={() => props.history.push("/")}>Home</h2>
        <div className={styles.login}>
          <p>Hello {data.user.email}</p>
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
