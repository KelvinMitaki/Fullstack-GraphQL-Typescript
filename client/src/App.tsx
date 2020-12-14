import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
