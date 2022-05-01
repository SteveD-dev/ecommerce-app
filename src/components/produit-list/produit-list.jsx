import React from "react";
import ProduitItem from "../produit-item/produit-item";

const ProduitList = ({ produits }) => {
  return produits.map((produits) => <ProduitItem produits={produits} />);
};

export default ProduitList;
