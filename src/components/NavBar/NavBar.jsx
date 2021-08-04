import React from "react";
import userIcon from "./assets/user-icon.svg";

import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <section className="navBar">
      <div className="logoContainer">
        <h1>Bookstagram</h1>
        </div>
      <div className="navContainer">
        <div className="userIcon">
            <img src={userIcon} alt="user icon"></img>
        </div>
      </div>
    </section>
  );
};
export default NavBar;
