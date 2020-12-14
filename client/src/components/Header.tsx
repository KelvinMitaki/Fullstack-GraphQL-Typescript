import React from "react";
import { useQuery } from "react-apollo";
import { currentUser } from "../queries/currentUser";
import styles from "./Header.module.css";

const Header: React.FC = props => {
  const { data, loading } = useQuery(currentUser);
  if (loading) {
    console.log({ loading });
  }
  if (data && data.user) {
    return (
      <div className={styles.header}>{JSON.stringify(data.user, null, 4)}</div>
    );
  }
  return <div className={styles.header}>You are not logged in</div>;
};

export default Header;
