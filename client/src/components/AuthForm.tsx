import React, { useState } from "react";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <form className={styles.form}>
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
            type="text"
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
