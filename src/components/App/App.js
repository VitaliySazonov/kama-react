import React from "react";
import "./App.css";
import Header from '../Header/Header'
import Navbar from "../Navbar/Navbar"
import Profile from "../Profile/Profile"
const App = () => {
  return (
    <section className={`app-wrapper`}>
      <Header />
      <Navbar />
      <Profile/>
    </section>
  );
};

export default App;
