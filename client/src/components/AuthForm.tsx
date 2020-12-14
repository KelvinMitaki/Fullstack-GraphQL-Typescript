import React, { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </form>
    </div>
  );
};

export default AuthForm;
