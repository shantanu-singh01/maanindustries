import React from "react";
import "../styles/productStyles.css";
import image3 from "../assets/maan_industries_3.png";
import image4 from "../assets/maan_industries_4.png";

const Product = () => {
  return (
    <div className="product" id="product">
      <div className="product-container">
        <div className="product-container-top">
          <div className="product-container-top-left">
            <h1>What is a Masterbatch?</h1>
            <p style={{fontSize:"18px", lineHeight:"1.6"}}>
              A plastic masterbatch is a concentrated mixture of pigments,
              additives, and carrier resin used in the plastics manufacturing
              process.
            </p>
            <p style={{fontSize:"18px", lineHeight:"1.6"}}>
              It is designed to impart specific properties to the base plastic,
              such as color, UV resistance, flame retardancy, or other desired
              characteristics. The masterbatch is added to the raw polymer
              during the production process to achieve the required
              modification.
            </p>
          </div>
          <div className="product-container-top-right">
            <img src={image3} alt="Maan Industries Masterbatch" />
          </div>
        </div>
        <div className="product-container-bottom">
          <div className="product-container-bottom-left">
            <img src={image4} alt="Maan Industries Masterbatch" />
          </div>
          <div className="product-container-bottom-right">
            <h1>Common Types Of Masterbatches</h1>
            <p style={{fontSize:"18px", lineHeight:"1.6"}}>
              Common types of masterbatches include color masterbatches for
              adding color, and additive masterbatches for providing additional
              characteristics such as UV resistance, flame retardancy, and
              antimicrobial properties. This process enhances the performance
              and appearance of the final plastic product while optimizing
              production efficiency and consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
