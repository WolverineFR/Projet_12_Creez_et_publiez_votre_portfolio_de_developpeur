import React, { useEffect } from "react";
import AOS from "aos";

import PropTypes from "prop-types";

const Skills = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className="SkillBox" data-aos="fade-up">
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
