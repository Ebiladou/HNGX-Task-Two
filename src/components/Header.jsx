import React from "react";
import SignIn from "../assets/Menu.png";
import Logo from '../assets/newtv.png'
import "../App.css";
import Search from "./Search";

function Header() {
  return (
    <div className="header-flex">
      <div className="header-home">
        <img src={Logo} alt="" />
        <h1>MovieBox</h1>
      </div>
      <div>
        <Search/>
      </div>
      <div>
        <button className="sign-btn">
          <img src={SignIn} alt="sign in logo" />
        </button>
      </div>
    </div>
  );
}

export default Header;