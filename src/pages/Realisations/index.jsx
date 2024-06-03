import React from "react";
import Slider from "../../components/Slider/";
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
        <Slider data={Projets} />
      </div>
    </main>
  );
}

export default Realisations;
