import React, { useState } from "react";
import styles from "./AuthForm.module.css";

interface Props {
  onLoginSubmit?: (data: { email: string; password: string }) => void;
  onSignupSubmit?: (data: { email: string; password: string }) => void;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthForm: React.FC<Props> = props => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.onLoginSubmit) {
      props.onLoginSubmit({ email, password });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <p style={{ color: "red" }}>{props.error}</p>
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
