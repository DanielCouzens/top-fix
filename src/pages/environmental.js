import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Hero from "../components/HeroTwo";
import Carousel from "../components/Carousel";
import Seo from "../components/Seo";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

import topFix from "../images/top-fix.svg";

export const pageQuery = graphql`
  query MyEnv {
    contentfulEnvironmentalPage {
      textOne {
        raw
      }
      textTwo {
        raw
      }
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.11)
      }
      title
      badge {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 100)
      }
    }
  }
`;

const Environmental = ({ data }) => {
  const [textState, setTextState] = useState(false);
  const styles = textState ? "show-text" : "hide-text";
  const read = textState ? "Read Less" : "Read More";

  const { heroImage, title, textOne, textTwo, badge } =
    data.contentfulEnvironmentalPage;

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <Layout>
      <Seo
        title="Environmental"
        description="Topfix Interiors have successfully held and maintained our environmental management system, phase 3 of BS 8555 through the Seren Scheme since 2012, we always endeavour to not only be compliant but also to be ahead of the game ensuring that all of the main contractors we work with can do so in confidence that we meet all of their requirements."
      />
      <Hero title={title} image={heroImage.gatsbyImageData} />
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
                  <GatsbyImage image={badge.gatsbyImageData} />
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

export default Environmental;
