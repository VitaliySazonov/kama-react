import React, { Component } from "react";
import logo from "../../img/logo.svg";
import style from './Header.module.css'
import "@testing-library/react"
import App from "../App/App"

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.header__img} src={logo} alt="" />
    </header>
  );
};

export default Header;

