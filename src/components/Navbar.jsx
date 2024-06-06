import React from "react";
import "../styles/navbarStyles.css";
import Logo from "../assets/maan_industries_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={Logo} alt="Maan Industries" height={120} width={220} />
        <ul>
          <a href="#product"><li>Product</li></a>
          <a href="#footer"><li>Contact Us</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
