import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" className="logo" href="">
        CLMX
      </NavLink>
      <nav className="Navigation-Box">
        <div className="DropdownMenu">☰</div>
        <ul>
          <li>
            <NavLink to="/" className="Accueil">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/A-propos" className="Apropos" href="">
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Realisations" className="Realisations" href="">
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink to="/Competences" className="Competences" href="">
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="Contact" href="">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
