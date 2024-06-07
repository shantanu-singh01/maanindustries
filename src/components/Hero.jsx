import React from "react";
import "../styles/heroStyles.css";
import Image1 from "../assets/maan_industries_2.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={Image1} alt="Maan Industries" className="hero-image" />
      </div>
      <div className="hero-right">
        <p><span style={{color:"#000", fontWeight:"600", fontSize:"22px"}}>Maan Industries</span> is a leading plastic manufacturing company specializing in the production of high-quality Color, Black, Specialty, Filler, and other additive Masterbatches.</p>
        <p>With a commitment to innovation and excellence, Maan Industries provides tailored solutions to meet the diverse needs of its clients in the plastics industry.</p>
      </div>
    </div>
  );
};

export default Hero;
