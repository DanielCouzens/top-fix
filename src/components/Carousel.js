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

  const slides = data.allContentfulCaseStudies.edges;
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

  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className="carousel">
      <h2 data-aos="fade-left">Case Studies</h2>
      <div
        data-aos="fade-up"
        className="carousel-images"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {slides.map((edge) => {
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
              />
            </Link>
          );
        })}
      </div>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className={`carousel-dot${index === idx ? " active" : ""}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
