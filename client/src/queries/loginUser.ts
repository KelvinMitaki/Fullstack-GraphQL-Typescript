import { gql } from "apollo-boost";

export const loginUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      _id
    }
  }
`;
