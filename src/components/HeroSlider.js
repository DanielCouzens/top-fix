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
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: BLURRED
          )
        }
        slideTwo {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: BLURRED
          )
        }
        slideThree {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: BLURRED
          )
        }
        slideFour {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: BLURRED
          )
        }
        slideFive {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: BLURRED
          )
        }
        slideSix {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            aspectRatio: 2.33
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  `);

  const sliderTitle = data.contentfulHomePage.sliderTitle;

  const slides = [1, 2, 3, 4, 5, 6];

  const [indexSlide, setIndexSlide] = useState(0);
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
        setIndexSlide((prevIndexSlide) =>
          prevIndexSlide === slides.length - 1 ? 0 : prevIndexSlide + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [indexSlide]);

  return (
    <div className="hero-slider">
      <div className="hero-slider-overlay"></div>
      <div
        className="hero-images"
        style={{ transform: `translate3d(${-indexSlide * 100}%, 0, 0)` }}>
        <GatsbyImage
          image={data.contentfulHomePage.slideOne.gatsbyImageData}
          className={`hero-image ${indexSlide === 0 ? "zoom-one" : " "}`}
          alt=""
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideTwo.gatsbyImageData}
          className={`hero-image ${indexSlide === 1 ? "zoom-two" : " "}`}
          alt=""
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideThree.gatsbyImageData}
          className={`hero-image ${indexSlide === 2 ? "zoom-one" : " "}`}
          alt=""
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideFour.gatsbyImageData}
          className={`hero-image ${indexSlide === 3 ? "zoom-two" : " "}`}
          alt=""
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideFive.gatsbyImageData}
          className={`hero-image ${indexSlide === 4 ? "zoom-one" : " "}`}
          alt=""
        />
        <GatsbyImage
          image={data.contentfulHomePage.slideSix.gatsbyImageData}
          className={`hero-image ${indexSlide === 5 ? "zoom-two" : " "}`}
          alt=""
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
