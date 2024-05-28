import React from "react";
import ProfilePicture from "../../assets/profile.webp";
import LaptopPicture from "../../assets/laptop-pic.webp";
import SkillsPicture from "../../assets/skills.webp";
import BookPicture from "../../assets/book.webp";

function Apropos() {
  return (
    <main>
      <div className="AproposSection">
        <div className="PresentationApropos">
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
          <img className="LaptopPicture" alt="Laptop" src={LaptopPicture}></img>
          <div className="greyLine"></div>
          <div className="TextSectionTwo">
            Au fil de mes études et de mes projets personnels, j'ai acquis une
            solide base en langages de programmation tels que HTML, CSS et
            JavaScript, ainsi qu'une compréhension approfondie des frameworks et
            bibliothèques populaires comme React. Mon expérience pratique m'a
            permis de maîtriser les principes du développement front-end et de
            créer des interfaces utilisateur interactives et esthétiques.
          </div>
          <div className="greyLine"></div>
        </div>
        <div className="AproposSectionThree">
          <div className="AproposSectionThreeBox">
            <img
              className="SkillsPicture"
              alt="Skills"
              src={SkillsPicture}
            ></img>
            <div className="TextSectionThree1">
              En tant que développeur web junior, je suis constamment à la
              recherche de nouvelles opportunités pour élargir mes compétences
              et relever des défis stimulants.
            </div>

            <div className="TextSectionThree2">
              Je suis passionné par l'apprentissage continu et je m'efforce
              d'approfondir mes connaissances en matière de développement web en
              suivant les dernières tendances et en participant à des projets
              collaboratifs.
            </div>
            <img className="BookPicture" alt="Book" src={BookPicture}></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Apropos;
