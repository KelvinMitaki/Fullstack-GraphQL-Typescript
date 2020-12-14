import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
