import React from "react";
import Carrousel from "../../components/Carrousel/";
import Projets from "../../data/projets.json";

function Realisations() {
  return (
    <main>
      <div className="Realisation">
        <div className="TitleBox1">
          <div className="TitleBox2">
            <h1 className="Title">Réalisations</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <Carrousel images={Projets} />
      </div>
    </main>
  );
}

console.log(Projets[0].picture);
export default Realisations;
