import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
let primary = "no";
const App = () => {
  return (
    <section>
      <img src={logo} alt="" />
      <Header />
      <Technologies />
    </section>
  );
};

export default App;
