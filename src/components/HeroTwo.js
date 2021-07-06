import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroTwo = (props) => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <GatsbyImage image={props.image} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default HeroTwo;
