import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" className="logo" href="">
        CLMX
      </NavLink>
      <div className="Navigation-Box">
        <NavLink to="/" className="Accueil">
          Accueil
        </NavLink>
        <NavLink to="/A-propos" className="Apropos" href="">
          À Propos
        </NavLink>
        <NavLink to="/Realisation" className="Realisation" href="">
          Réalisation
        </NavLink>
        <NavLink to="/Competences" className="Competences" href="">
          Compétences
        </NavLink>
        <NavLink to="/Contact" className="Contact" href="">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
