import { gql } from "apollo-boost";

export const signupUser = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      email
      _id
    }
  }
`;
