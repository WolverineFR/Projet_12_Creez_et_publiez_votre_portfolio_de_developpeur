import React, { useState, useEffect } from "react";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    title: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validEmail = (email) => {
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidator.test(email);
  };

  const alertMessage = (e) => {
    e.preventDefault();

    const { lastname, firstname, email, title, message } = formData;

    if (lastname && firstname && email && title && message) {
      if (validEmail(email)) {
        setOpen(true);
        setErrorMessage("");

        setTimeout(() => {
          setOpen(false);
        }, 3000);
      } else {
        setErrorMessage("Veuillez entrer une adresse e-mail valide.");
      }
    } else {
      setErrorMessage("Tous les champs de saisie doivent être remplis !");
    }
  };
  return (
    <main>
      <div className="ContactPage">
        {open && (
          <div className="AlerteBox">
            <div className="AlerteText">Votre message s'est bien envoyé !</div>
          </div>
        )}
        <div className="TitleBox1">
          <div className="TitleBox2" data-aos="fade-right">
            <h1 className="Title">Contact</h1>
            <div className="UnderlineTitle"></div>
          </div>
        </div>
        <div className="Information" data-aos="fade-up">
          Vous souhaitez me contacter pour plus d'informations ?
        </div>
        <div className="greyLine" data-aos="fade-up"></div>
        <div className="FormSection">
          <div className="TitleForm" data-aos="fade-up">
            Vous pouvez remplir le formulaire ci dessous
          </div>
          <form data-aos="fade-up" onSubmit={alertMessage}>
            <div className="FirstAndLastName">
              <div className="LastNameBox">
                <label htmlFor="lastname">Nom*</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="FirstNameBox">
                <label htmlFor="firstname">Prenom*</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
            <label htmlFor="title">Sujet*</label>
            <input
              type="title"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            ></input>
            <label for="message">Message*</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <p className="required">* champs obligatoire</p>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <div className="btnBox">
              <input
                onClick={alertMessage}
                type="submit"
                value="Envoyer"
                id="submitBtn"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
