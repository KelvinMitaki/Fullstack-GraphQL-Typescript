import { gql } from "apollo-boost";

export const signupUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      _id
    }
  }
`;
