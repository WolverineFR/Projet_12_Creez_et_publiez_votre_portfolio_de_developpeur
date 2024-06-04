import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={data.lien} className="Card" href="" key={data.id}>
      <img className="cardImg" alt={data.title} src={data.picture}></img>
      <p className="cardTitle">{data.title}</p>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
