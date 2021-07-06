import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        title
        sliderTitle
        slides {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
          id
          title
        }
      }
    }
  `);

  const slides = data.contentfulHomePage.slides;
  const sliderTitle = data.contentfulHomePage.sliderTitle;

  const [index, setIndex] = useState(0);
  const delay = 5000;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="hero-slider">
      <div
        className="hero-images"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}>
        {slides.map((edge, index) => (
          <GatsbyImage
            image={edge.gatsbyImageData}
            className="hero-image"
            key={index}
          />
        ))}
      </div>
      <div className="slider-buttons" data-aos="fade-up">
        <div className="hero-title">
          <h1>{sliderTitle}</h1>
        </div>

        <Link to="/case-studies" className="button-large">
          <p>Case Studies</p>
        </Link>
        <Link to="/contact" className="button-large">
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
