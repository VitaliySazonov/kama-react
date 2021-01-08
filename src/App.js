import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import Header from "./Header"
// import Technologies from "./Technologies"
let isAdmin = false; // admin IP
let ID = '176.168.2.1';
let admClass = isAdmin ? `yes ${ID}` : 'no';
const App = () => {
  return (
    <section
      className={`app-wrapper`}
    >
      <header className={`header`}>
        <img
          src={logo}
          alt=""
        />
      </header>
      <nav
        className={`nav`}
      >
        <div><a href="#Profile">Profile</a></div>
        <div><a href="#Messages">Messages</a></div>
        <div><a href="#News">News</a></div>
        <div><a href="#Music">Music</a></div>
        <div><a href="#Settings">Settings</a></div>
      </nav>
      <div
        className={`content`}
      >
        Some content
      </div>
    </section>
  );
};

export default App;
