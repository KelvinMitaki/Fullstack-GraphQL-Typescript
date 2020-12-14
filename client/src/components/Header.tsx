import React from "react";
import { useQuery } from "react-apollo";
import { currentUser } from "../queries/currentUser";

const Header: React.FC = props => {
  const { data, loading } = useQuery(currentUser);
  if (loading) {
    console.log({ loading });
  } else {
    console.log(data);
  }
  return <div>Header Header</div>;
};

export default Header;
