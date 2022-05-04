import React from "react";
import men from "../../images/man.jpg";
import women from "../../images/woman.jpg";
import hat from "../../images/hat.jpg";
import jackets from "../../images/jackets.jpg";
import sneakers from "../../images/sneakers.jpg";
import Directory from "../../directory/directory";

const Home = () => {
  const produits = [
    { id: "1", produit: "hats", image: `${hat}` },
    { id: "2", produit: "jackes", image: `${jackets}` },
    { id: "3", produit: "sneakers", image: `${sneakers}` },
    { id: "4", produit: "women", image: `${women}` },
    { id: "5", produit: "men", image: `${men}` },
  ];

  return <Directory produits={produits} />;
};

export default Home;
