import React from "react";
import ProduitItem from "../components/produit-item/produit-item";
import "./directory.scss";

const Directory = ({ produits }) => {
  return (
    <div className="produits-container">
      {produits.map((produit) => (
        <ProduitItem key={produit.id} produits={produit} />
      ))}
    </div>
  );
};

export default Directory;
