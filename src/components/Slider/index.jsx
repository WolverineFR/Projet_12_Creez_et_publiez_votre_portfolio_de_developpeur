import React, { useState } from "react";
import PropTypes from "prop-types";
import ChevronLeft from "../../assets/chevron-left.png";
import ChevronRight from "../../assets/chevron-right.png";

const Slider = ({ data }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));

  return (
    <div className="CarrouselBox">
      {data.map((data) => (
        <img
          className="CarrouselImg"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          src={data.picture}
          alt={data.title}
        />
      ))}
      <div className="ChevronBox">
        <button onClick={prev}>
          <img className="Chevrons" src={ChevronLeft} alt="Gauche"></img>
        </button>
        <button onClick={next}>
          <img className="Chevrons" src={ChevronRight} alt="Droite"></img>
        </button>
      </div>
      <div></div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
