import React, { useState } from "react";
// import { RIMenu3line, RICloseLin } from "react-icon/ri";
import logo from "../../assets/logo.svg";
import "./style.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar_links_container">
          <p>
            <a href="#home"> Home </a>
          </p>
          <p>
            <a href="#WhatGPT3"> What is GPT? </a>
          </p>
          <p>
            <a href="#Possibility"> Open AI </a>
          </p>
          <p>
            <a href="#Features"> Case Studies </a>
          </p>
          <p>
            <a href="#Blog"> Library </a>
          </p>
        </div>
      </div>
      <div className="gpt3_navbar_sign">
        <p>Sign in</p>
        <button type="button"> Sign up </button>
      </div>
      <div className="gpt3_navbar_menu">
        {/* {toggleMenu ? (
          <RIMenu3line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RICloseLin
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
