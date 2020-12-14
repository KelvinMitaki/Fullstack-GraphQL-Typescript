import React from "react";
import { graphql } from "react-apollo";
import { currentUser } from "../queries/currentUser";

const Header: React.FC = props => {
  return <div>Header Header</div>;
};

export default graphql(currentUser)(Header);
