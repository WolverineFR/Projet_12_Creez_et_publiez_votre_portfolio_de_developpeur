import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";

const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <Link
      to={data.lien}
      className="Card"
      data-aos="fade-up"
      href=""
      key={data.id}
    >
      <div className="DescriptionCompetenceBox">
        <p className="description">{data.description}</p>
        <p className="competences">{data.competences}</p>
      </div>
      <img className="cardImg" alt={data.title} src={data.picture}></img>
      <p className="cardTitle">{data.title}</p>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
