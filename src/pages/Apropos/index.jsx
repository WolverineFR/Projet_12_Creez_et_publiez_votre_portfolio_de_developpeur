import React from "react";
import ProfilePicture from "../../assets/profile.webp";

function Apropos() {
  return (
    <main>
      <div className="AproposSection">
        <div className="Presentation">
          <div className="TitleBox">
            <h1 className="Title">A propos de moi</h1>
            <div className="UnderlineTitle"></div>
          </div>
          <div className="InformationBox">
            <div className="InformationApropos">
              <div className="infoOne">
                Bienvenue sur mon portfolio !<div className="greyLine"></div>
              </div>
              <div className="infoTwo">
                Je suis Maxence, un passionné de développement web résolu à
                transformer des lignes de code en expériences utilisateur
                exceptionnelles.
              </div>
            </div>
            <img
              className="ProfilePicture"
              alt="Profile"
              src={ProfilePicture}
            ></img>
          </div>
        </div>
        <div className="AproposSectionOne">
          <div className="TextSectionOne">
            Mon voyage dans le monde du développement a commencé avec une
            curiosité sans fin pour comprendre comment les sites web prennent
            vie et évoluent pour répondre aux besoins des utilisateurs.
          </div>
          <div className="greyLine"></div>
        </div>
        <div className="AproposSectionTwo">
          <div className="TextSectionTwo">
            Mon voyage dans le monde du développement a commencé avec une
            curiosité sans fin pour comprendre comment les sites web prennent
            vie et évoluent pour répondre aux besoins des utilisateurs.
          </div>
          <div className="greyLine"></div>
        </div>
      </div>
    </main>
  );
}

export default Apropos;
