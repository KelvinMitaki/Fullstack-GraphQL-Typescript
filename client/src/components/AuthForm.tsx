import { GraphQLError } from "graphql";
import React, { useState } from "react";
import styles from "./AuthForm.module.css";

interface Props {
  onSubmit?: (data: { email: string; password: string }) => void;
  error?: readonly GraphQLError[];
  setError?: React.Dispatch<
    React.SetStateAction<readonly GraphQLError[] | undefined>
  >;
}

const AuthForm: React.FC<Props> = props => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit({ email, password });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        {props.error &&
          props.error.map(err => (
            <p style={{ color: "red" }} key={err.message}>
              {err.message}
            </p>
          ))}
        <div>
          <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            id="email"
            onFocus={() =>
              props.error && props.setError && props.setError(undefined)
            }
          />
        </div>
        <div>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            id="password"
            onFocus={() =>
              props.error && props.setError && props.setError(undefined)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
