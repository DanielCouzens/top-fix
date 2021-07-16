import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCaseStudies {
        edges {
          node {
            caseStudiesTitle
            caseStudiesMainPhoto {
              gatsbyImageData(
                layout: CONSTRAINED
                aspectRatio: 0.7
                placeholder: NONE
              )
            }
            caseStudiesText {
              raw
            }
          }
        }
      }
    }
  `);

  const slidesCarousel = data.allContentfulCaseStudies.edges;
  const [index, setIndex] = useState(0);
  const delay = 5000;
  const timeoutRef = useRef(null);

  const dots = slidesCarousel.slice(0, -2);

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
          prevIndex === slidesCarousel.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className="carousel">
      <h2>Case Studies</h2>
      <div
        className="carousel-images-mobile"
        style={
          index <= slidesCarousel.length - 0
            ? {
                transform: `translateX(${-index * 100}%)`,
              }
            : {
                transform: `translateX(${-index * 0}%)`,
              }
        }>
        {slidesCarousel.map((edge, index) => {
          return (
            <Link
              className="case-study-link-mobile"
              to={`/case-study/${edge.node.caseStudiesTitle
                .split(" ")
                .join("-")
                .toLowerCase()}`}
              key={index}>
              <GatsbyImage
                image={edge.node.caseStudiesMainPhoto.gatsbyImageData}
                className="case-studies-image-mobile"
                alt=""
              />
              <div className="case-study-link-button-mobile">
                <p>View Case</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        className="carousel-images"
        style={
          index <= slidesCarousel.length - 3
            ? {
                transform: `translateX(${-index * 33.33333}%)`,
              }
            : {
                transform: `translateX(${-index * 0}%)`,
              }
        }>
        {slidesCarousel.map((edge, index) => {
          return (
            <Link
              className="case-study-link"
              to={`/case-study/${edge.node.caseStudiesTitle
                .split(" ")
                .join("-")
                .toLowerCase()}`}
              key={index}>
              <GatsbyImage
                image={edge.node.caseStudiesMainPhoto.gatsbyImageData}
                className="case-studies-image"
                alt=""
              />
              <div className="case-study-link-button">
                <p>View Case</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="carousel-dots">
        {dots.map((_, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className="carousel-dot"
            // className={`carousel-dot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
