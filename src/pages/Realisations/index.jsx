import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/";
import Projets from "../../data/projets.json";
import Card from "../../components/Card";

function Realisations() {
  // const [selectedFilters, setSelectedFilters] = useState([]);
  // const [filteredItems, setFilteredItems] = useState(items);

  // let filters = [Projets.langages];

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
        <div className="ProjetsSection">
          <div className="CategoriesAndTitle">
            <div className="TitleBox">
              <h2 className="Title">Projets</h2>
              <div className="UnderlineTitle"></div>
            </div>
            <div className="CategoriesBox">
              <div className="cat Tous">Tous</div>
              <div className="cat HtmlCss">HTML/CSS</div>
              <div className="cat JavaScript">JavaScript</div>
              <div className="cat React">React</div>
            </div>
          </div>
          <div className="ProjetsBox">
            {Projets.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Realisations;
