import React from "react";
import { NavLink } from "react-router-dom";

function Erreur404() {
  return (
    <main>
      <div className="ErrorBox">
        <h1 className="Title">
          Erreur<br></br>404
        </h1>
        <div className="Information">
          Oups une erreur est survenu, cette page n'existe pas Vous pouvez
          revenir à l'accueil en cliquant<br></br>
          <NavLink to="/" className="Redirect">
            ICI
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Erreur404;
