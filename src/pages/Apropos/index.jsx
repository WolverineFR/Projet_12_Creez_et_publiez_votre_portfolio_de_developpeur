import React from "react";
import ProfilePicture from "../../assets/profile.jpg";

function Apropos() {
  return (
    <main>
      <div className="Presentation">
        <div className="TitleBox">
          <h1 className="Title">A propos de moi</h1>
          <div className="UnderlineTitle"></div>
        </div>
        <div className="InformationBox">
          <div className="Information">
            Bienvenue sur mon portfolio ! Je suis Maxence, un passionné de
            développement web résolu à transformer des lignes de code en
            expériences utilisateur exceptionnelles.
          </div>
          <img
            className="ProfilePicture"
            alt="Profile"
            src={ProfilePicture}
          ></img>
        </div>
      </div>
    </main>
  );
}

export default Apropos;
