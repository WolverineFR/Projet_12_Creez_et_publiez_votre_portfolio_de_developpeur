import React, { useEffect } from "react";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <main>
      <div className="Presentation">
        <div className="TitleBox1">
          <div className="TitleBox2" data-aos="fade-right">
            <h1 className="Title">Présentation</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <div className="Information" data-aos="fade-up">
          Bienvenue sur mon site de présentation de mon portfolio développeur.
          <br></br> Vous y trouverez des informations sur moi ainsi que mes
          réalisations, accessible directement depuis la barre de navigation.
        </div>
      </div>
    </main>
  );
}

export default Home;
