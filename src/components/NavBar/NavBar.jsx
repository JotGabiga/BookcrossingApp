import React from "react";
import userIcon from "./assets/user-icon.svg";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <section className="navBar">
      <div className="navContainer">
      </div>
      <div className="logoContainer">  
     <Link style={{ textDecoration: 'none'}} to="/">
          <h1>Bookstagram</h1>
          </Link>
      </div>
      <div className="navContainer rightContainer">
      <Link to="/yourprofile">
        <div className="userIcon">
        <img src={userIcon} alt="user icon"></img>   
        </div>
        </Link>
      </div>
    </section>
  );
};
export default NavBar;
