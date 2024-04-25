import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img.jpg";
// mettre img pour logo

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" className="main-nav-logo" href="">
        <img className="main-nav-logo-image" src={logo} alt="Mon logo" />
      </NavLink>
    </div>
  );
}

export default Header;
