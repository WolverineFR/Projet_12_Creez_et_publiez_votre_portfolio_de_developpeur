import React, { useState, useEffect } from "react";
import Slider from "../../components/Slider/";
import Projets from "../../data/projets.json";
import Card from "../../components/Card";
import AOS from "aos";

function Realisations() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filterProjects = () => {
    if (selectedCategory === "Tous") {
      return Projets;
    }
    return Projets.filter((project) =>
      project.langages.includes(selectedCategory)
    );
  };

  const categoryClick = (category) => {
    setSelectedCategory(category);
  };
  const getCategoryButtonClass = (category) => {
    return category === selectedCategory ? "cat Selected" : "cat";
  };

  const filteredProjects = filterProjects();

  return (
    <main>
      <div className="Realisation">
        <div className="TitleBox1">
          <div className="TitleBox2" data-aos="fade-right">
            <h1 className="Title">Réalisations</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <Slider data={Projets} />
        <div className="ProjetsSection">
          <div className="CategoriesAndTitle">
            <div className="TitleBox" data-aos="fade-up">
              <h2 className="Title">Projets</h2>
              <div className="UnderlineTitle"></div>
            </div>
            <div className="CategoriesBox" data-aos="fade-up">
              <button
                onClick={() => categoryClick("Tous")}
                className={getCategoryButtonClass("Tous")}
              >
                Tous
              </button>
              <button
                onClick={() => categoryClick("HTML/CSS")}
                className={getCategoryButtonClass("HTML/CSS")}
              >
                HTML/CSS
              </button>
              <button
                onClick={() => categoryClick("JavaScript")}
                className={getCategoryButtonClass("JavaScript")}
              >
                JavaScript
              </button>
              <button
                onClick={() => categoryClick("React")}
                className={getCategoryButtonClass("React")}
              >
                React
              </button>
            </div>
          </div>
          <div className="ProjetsBox" data-aos="fade-up">
            {filteredProjects.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Realisations;
