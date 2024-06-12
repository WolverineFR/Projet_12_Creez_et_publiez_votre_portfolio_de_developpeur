import React from "react";

function Contact() {
  return (
    <main>
      <div className="ContactPage">
        <div className="TitleBox1">
          <div className="TitleBox2">
            <h1 className="Title">Contact</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <div className="Information">
          Vous souhaitez me contacter pour plus d'informations ?
        </div>
        <div className="greyLine"></div>
        <div className="FormSection">
          <div className="TitleForm">
            Vous pouvez remplir le formulaire ci dessous
          </div>
          <form action="#" method="post">
            <div className="FirstAndLastName">
              <div className="LastNameBox">
                <label for="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname"></input>
              </div>
              <div className="FirstNameBox">
                <label for="firstname">Prenom</label>
                <input type="text" name="firstname" id="firstname"></input>
              </div>
            </div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email"></input>
            <label for="title">Sujet</label>
            <input type="title" name="title" id="title"></input>
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="btnBox">
              <input type="submit" value="Envoyer" id="submitBtn"></input>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
