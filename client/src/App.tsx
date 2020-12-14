import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useQuery } from "react-apollo";
import { currentUser } from "./queries/currentUser";

function App() {
  const { data, loading } = useQuery<{ user?: { email: string; _id: string } }>(
    currentUser
  );
  return (
    <div className="App">
      <Header data={data} loading={loading} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
