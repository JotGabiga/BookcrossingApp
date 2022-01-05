import React from "react";
import "./Footer.scss";
import instagram from "./assets/instagram-brands.svg";
import facebook from "./assets/facebook-square-brands.svg";
import twitter from "./assets/twitter-square-brands.svg";


const Footer = (props) => {
    return (
        <section className="footer">
           <section  className="footerContainer">
              <div className="leftContainer">
                <div className ="socialMediaContainer">
                  <a href="https://www.instagram.com">
                    <img src={instagram} alt="instagram icon"></img>
                  </a>
                  <a href="https://www.facebook.com">
                    <img src={facebook} alt="facebook icon"></img>
                  </a>
                  <a href="https://twitter.com/?lang=pl">
                    <img src={twitter} alt="twitter icon"></img>
                  </a>
                </div>
                <div className="sighn">
                  <h6>2021 Justyna Gabiga</h6>
                </div>
              </div>
            </section>
           <section className="footerContainer menuContainer">
            <ul>
              <li >Regulamin</li>
              <li>Polityka cookies</li>
              <li>Polityka prywatności</li>
              <li>Ustawienia cookies</li>
              <li>FAQ</li>
            </ul>
           </section>
        </section>
  );
};
export default Footer;
