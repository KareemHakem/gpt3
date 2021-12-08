import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ClearIcon from "@mui/icons-material/Clear";
import logo from "../../assets/logo.svg";
import "./style.css";

const Menu = () => (
  <>
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
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar_links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar_sign">
        <p>Sign in</p>
        <button type="button"> Sign up </button>
      </div>
      <div className="gpt3_navbar_menu">
        {toggleMenu ? (
          <ClearIcon
            className="gpt3_navbar_menu_icons"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <MenuOpenIcon
            className="gpt3_navbar_menu_icons"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar_menu_container scale-up-center">
            <div className="gpt3_navbar_menu_container_links">
              <Menu />
              <div className="gpt3_navbar_menu_container_links_sign">
                <p>Sign in</p>
                <button type="button"> Sign up </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
