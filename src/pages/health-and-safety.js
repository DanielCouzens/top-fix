import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Hero from "../components/HeroTwo";
import Carousel from "../components/Carousel";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

import topFix from "../images/top-fix.svg";

export const pageQuery = graphql`
  query Health {
    contentfulHealthAndSafetyPage {
      textOne {
        raw
      }
      textTwo {
        raw
      }
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          aspectRatio: 2.1
          cropFocus: BOTTOM_RIGHT
        )
      }
      title
      badgeOne {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 100)
      }
      badgeTwo {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 100)
      }
      badgeThree {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 100)
      }
      badgeFour {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 100)
      }
    }
  }
`;

const Health = ({ data }) => {
  const [textState, setTextState] = useState(false);
  const styles = textState ? "show-text" : "hide-text";
  const read = textState ? "Read Less" : "Read More";

  const {
    heroImage,
    title,
    textOne,
    textTwo,
    badgeOne,
    badgeTwo,
    badgeThree,
    badgeFour,
  } = data.contentfulHealthAndSafetyPage;

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <Layout>
      <div id="hs-hero">
        <Hero title={title} image={heroImage.gatsbyImageData} />
      </div>
      <div className="environment-wrap">
        <div className="background"></div>
        <div className="page-wrap" id="sfs">
          <div className="environment-container">
            <div className="environment">
              {textOne && renderRichText(textOne)}
              <button
                onClick={() => setTextState(!textState)}
                onKeyDown={() => setTextState(!textState)}>
                <p>{read}</p>
              </button>
              <div className={styles}>{textTwo && renderRichText(textTwo)}</div>
              <div className="badge-wrap">
                <div className="badge">
                  <GatsbyImage image={badgeOne.gatsbyImageData} />
                </div>
                <div className="badge">
                  <GatsbyImage image={badgeTwo.gatsbyImageData} />
                </div>
                <div className="badge">
                  <GatsbyImage image={badgeThree.gatsbyImageData} />
                </div>
                <div className="badge">
                  <GatsbyImage image={badgeFour.gatsbyImageData} />
                </div>
              </div>
            </div>
            <div className="bars-wrap" data-aos="fade-left">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <Carousel />
        </div>
      </div>
    </Layout>
  );
};

export default Health;
