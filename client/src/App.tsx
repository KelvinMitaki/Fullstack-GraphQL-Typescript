import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header, { User } from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useQuery } from "react-apollo";
import { currentUser } from "./queries/currentUser";

function App() {
  const { data, loading } = useQuery<{ user?: User }>(currentUser);
  return (
    <div className="App">
      <Header data={data} loading={loading} />
      <Route path="/signup" exact render={() => <Signup data={data} />} />
      <Route path="/login" exact render={() => <Login data={data} />} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
