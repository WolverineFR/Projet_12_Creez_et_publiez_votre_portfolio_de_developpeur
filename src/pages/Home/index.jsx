import React from "react";

function Home() {
  return (
    <main>
      <div className="Presentation">
        <div className="TitleBox">
          <h1 className="Title">Présentation</h1>
          <div className="UnderlineTitle"></div>
        </div>
        <div className="Information">
          Bienvenue sur mon site de présentation de mon portfolio développeur.
          <br></br> Vous y trouverez des informations sur moi ainsi que mes
          réalisations, accessible directement depuis la barre de navigation.
        </div>
      </div>
    </main>
  );
}

export default Home;
