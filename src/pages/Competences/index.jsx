import React from "react";
import Langage from "../../data/langage.json";
import Skills from "../../components/Skills";

function Competences() {
  return (
    <main>
      <div className="CompetencesPage">
        <div className="TitleBox1">
          <div className="TitleBox2">
            <h1 className="Title">Compétences</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <div className="CompetencesSection">
          {Langage.map((data) => (
            <Skills key={data.id} data={data}></Skills>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Competences;
