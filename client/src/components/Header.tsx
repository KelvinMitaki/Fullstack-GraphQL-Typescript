import React from "react";
import { useQuery } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import styles from "./Header.module.css";

const Header: React.FC<RouteComponentProps> = props => {
  const { data, loading } = useQuery<{ user?: { email: string; _id: string } }>(
    currentUser
  );
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
          <button>Logout</button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.header}>
      <h2 onClick={() => props.history.push("/")}>Home</h2>
      <div>
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default withRouter(Header);
