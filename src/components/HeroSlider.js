import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Logo from "../images/Topfix-Logo.png";

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        title
        sliderTitle
        slideOne {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
        slideTwo {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
        slideThree {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
        slideFour {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
        slideFive {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
        slideSix {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100, aspectRatio: 2.33)
        }
      }
    }
  `);

  const sliderTitle = data.contentfulHomePage.sliderTitle;

  const slides = [1, 2, 3, 4, 5, 6];

  const [index, setIndex] = useState(0);
  const delay = 4000;
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
      <div className="hero-slider-overlay"></div>
      <div
        className="hero-images"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        <GatsbyImage
          image={data.contentfulHomePage.slideOne.gatsbyImageData}
          className={`hero-image ${index === 0 ? "zoom-one" : " "}`}
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideTwo.gatsbyImageData}
          className={`hero-image ${index === 1 ? "zoom-two" : " "}`}
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideThree.gatsbyImageData}
          className={`hero-image ${index === 2 ? "zoom-one" : " "}`}
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideFour.gatsbyImageData}
          className={`hero-image ${index === 3 ? "zoom-two" : " "}`}
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideFive.gatsbyImageData}
          className={`hero-image ${index === 4 ? "zoom-one" : " "}`}
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideSix.gatsbyImageData}
          className={`hero-image ${index === 5 ? "zoom-two" : " "}`}
        />
      </div>

      <div className="hero-title-logo">
        <img src={Logo} width="70" height="70" alt="topfix logo" />
        <h2>Top Fix Interiors</h2>
      </div>

      <div className="hero-title">
        <h1>{sliderTitle}</h1>
      </div>
      <div className="slider-buttons">
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
