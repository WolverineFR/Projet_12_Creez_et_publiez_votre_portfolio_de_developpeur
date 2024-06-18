import React from "react";
import PropTypes from "prop-types";

const Skills = ({ data }) => {
  return (
    <div className="SkillBox">
      <div className="LogoBox">
        <img className="LogoLangage" alt={data.name} src={data.logo}></img>
      </div>
      <div className="DescriptionBox">
        <div className="DescriptionTitle">{data.name}</div>
        <p className="DescriptionTexte">{data.description}</p>
      </div>
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Skills;
