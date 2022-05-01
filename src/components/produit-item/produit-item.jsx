import React from "react";
import "./produit-item.scss";

const ProduitItem = ({ produits }) => {
  const { produit, image } = produits;
  return (
    <div className="produit-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="produit-body-container">
        <h2>{produit}</h2>
        <p>Buy Now</p>
      </div>
    </div>
  );
};

export default ProduitItem;
