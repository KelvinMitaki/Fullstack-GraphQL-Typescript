import React, { useState } from "react";
import styles from "./AuthForm.module.css";

interface Props {
  onLoginSubmit?: (data: { email: string; password: string }) => void;
  onSignupSubmit?: (data: { email: string; password: string }) => void;
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
        <div>
          <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
