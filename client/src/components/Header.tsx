import React from "react";
import { useQuery } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { currentUser } from "../queries/currentUser";
import styles from "./Header.module.css";

const Header: React.FC<RouteComponentProps> = props => {
  const { data, loading } = useQuery(currentUser);
  if (loading) {
    console.log({ loading });
  }
  if (data && data.user) {
    return (
      <div className={styles.header}>
        <h2 onClick={() => props.history.push("/")}>Home</h2>
        <div>{JSON.stringify(data.user, null, 4)}</div>
      </div>
    );
  }
  return (
    <div className={styles.header}>
      <h2 onClick={() => props.history.push("/")}>Home</h2>
      <div>You are not logged in</div>
    </div>
  );
};

export default withRouter(Header);
