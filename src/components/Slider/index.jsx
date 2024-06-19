import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ChevronLeft from "../../assets/chevron-left.png";
import ChevronRight from "../../assets/chevron-right.png";

const Slider = ({ data }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  const next = useCallback(() => {
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  }, [data.length]);

  useEffect(() => {
    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="CarrouselBox" data-aos="fade-up">
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
      <div className="DotBox">
        <div className="Dots">
          {data.map((_, i) => (
            <div className={`dot ${curr === i ? "selected" : ""}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
