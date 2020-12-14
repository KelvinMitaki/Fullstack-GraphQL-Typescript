import { gql } from "apollo-boost";

export const currentUser = gql`
  query {
    user {
      _id
      email
    }
  }
`;
