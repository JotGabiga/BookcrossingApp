import React from "react";
import userIcon from "./assets/user-icon.svg";
import navIcon from "./assets/bars-solid.svg";
import exit from "./assets/times-solid.svg";
import "./NavBar.scss";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let body = (
    <div className="navModal">
      <div className="exitSec" onClick={handleClose}>
        <img src={exit} alt="exit icon"></img>
      </div>
      <div className="navSec">
        <ul>
          <li>
            <Link to="/" onClick={handleClose}>Home</Link>
          </li>
          <li>
            <Link to="/settings"onClick={handleClose}>Ustawienia</Link>
          </li>
          <li>
            <Link to="/registration"onClick={handleClose}>Załóż konto</Link>
          </li>
          <li>
            <Link to="/yourprofile"onClick={handleClose}>Twoje konto</Link>
          </li>
          <li>
            <Link to="/bookpage"onClick={handleClose}>Książka</Link>
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <section className="navBar">
      <div className="navContainer">
        <button type="button" onClick={handleOpen}>
          <img src={navIcon} alt="navigation icon"></img>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <div className="logoContainer">
        <h1>Bookstagram</h1>
      </div>
      <div className="navContainer rightContainer">
        <div className="userIcon">
        <Link to="/yourprofile"onClick={handleClose}><img src={userIcon} alt="user icon"></img></Link>
          
        </div>
      </div>
    </section>
  );
};
export default NavBar;
