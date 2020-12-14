import { gql } from "apollo-boost";

export const logoutUser = gql`
  mutation {
    logout {
      _id
      email
    }
  }
`;
