import React, { useState, useEffect } from "react";
import * as propTypes from "prop-types";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql } from "gatsby";
import topFix from "../images/top-fix.svg";
import close from "../images/icons/cross-sign.svg";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

export const query = graphql`
  query($caseStudiesTitle: String!) {
    contentfulCaseStudies(caseStudiesTitle: { eq: $caseStudiesTitle }) {
      caseStudiesTitle
      caseStudiesText {
        raw
      }
      caseStudiesProducts {
        raw
      }
      caseStudiesMainPhoto {
        gatsbyImageData(
          layout: CONSTRAINED
          aspectRatio: 0.7
          cropFocus: BOTTOM
        )
      }
      caseStudiesSlider {
        gatsbyImageData(
          aspectRatio: 2.53
          layout: FULL_WIDTH
          cropFocus: BOTTOM
          quality: 100
        )
        id
        title
      }
      caseStudyDescription {
        raw
      }
      caseStudiesGallery {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    # allContentfulCaseStudies {
    #   edges {
    #     node {
    #       caseStudiesTitle
    #       id
    #       caseStudiesMainPhoto {
    #         gatsbyImageData(aspectRatio: 1.5, height: 500, layout: CONSTRAINED)
    #       }
    #     }
    #   }
    # }
  }
`;

const hero = {
  speed: 1000,
  fade: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
};

function CaseStudy({ data }) {
  const [caseState, setCaseState] = useState(false);
  const [galleryState, setGalleryState] = useState(false);
  const styles = caseState ? "show" : "hide";
  const galleryStyles = galleryState ? "show-gallery" : "hide-gallery";

  const {
    caseStudiesMainPhoto,
    caseStudiesTitle,
    caseStudiesText,
    caseStudiesProducts,
    caseStudiesSlider,
    caseStudyDescription,
    caseStudiesGallery,
  } = data.contentfulCaseStudies;

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <Layout>
      <div className="case-study-mobile-hero">
        <div className="overlay-mobile"></div>
        <GatsbyImage
          image={caseStudiesMainPhoto.gatsbyImageData}
          className="case-studies-image"
        />

        <div className="case-study-mobile-title">
          <h1>{caseStudiesTitle}</h1>
        </div>
      </div>
      <div className="case-study-slider-wrap">
        <div className="overlay"></div>
        <Slider {...hero} className="overflow-hidden">
          {caseStudiesSlider.map((image) => (
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.title.split("-").join(" ").split(".")[0]}
              key={image.id}
            />
          ))}
        </Slider>
        <div className="case-study-title">
          <h1>{caseStudiesTitle}</h1>
        </div>
      </div>

      <div className="background"></div>

      <div
        className="description"
        // data-aos="fade-left"
      >
        <p>{caseStudyDescription && renderRichText(caseStudyDescription)}</p>
      </div>
      <div className="bars-wrap-mob">
        <img src={topFix} height="50" width="50" alt="topfix styling" />
      </div>
      <div className="case-wrap">
        {/* <div className="case-background"></div> */}

        <div className="case-study-container">
          <div className="case-study-page">
            <div
              // data-aos="fade-up"
              className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>

            <div
              className="case-study-text-wrap"
              // data-aos="fade-up"
            >
              {caseStudiesText && renderRichText(caseStudiesText)}
            </div>

            <div className="case-study-information-wrap">
              <button
                className="button"
                onClick={() => setCaseState(!caseState)}
                onKeyDown={() => setCaseState(!caseState)}>
                <p data-aos="fade-left">Products Used</p>
              </button>

              <div className={styles}>
                <button
                  onClick={() => setCaseState(!caseState)}
                  onKeyDown={() => setCaseState(!caseState)}>
                  <img
                    src={close}
                    width="15"
                    height="15"
                    alt="close box icon"
                  />
                </button>
                <h2>Products Used</h2>
                {caseStudiesProducts && renderRichText(caseStudiesProducts)}
              </div>

              <button
                className="button"
                onClick={() => setGalleryState(!galleryState)}
                onKeyDown={() => setGalleryState(!galleryState)}>
                <p
                // data-aos="fade-left"
                >
                  Gallery
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className={galleryStyles}>
          <button
            onClick={() => setGalleryState(!galleryState)}
            onKeyDown={() => setGalleryState(!galleryState)}>
            <img src={close} width="15" height="15" alt="close box icon" />{" "}
            <span>Close Gallery</span>
          </button>
          {caseStudiesGallery.slice(0, 16).map((image) => (
            <GatsbyImage
              image={image.gatsbyImageData}
              // alt={image.title.split("-").join(" ").split(".")[0]}
              key={image.id}
            />
          ))}
        </div>
        <PageNav />
        <Carousel />
      </div>
    </Layout>
  );
}

CaseStudy.propTypes = {
  data: propTypes.object.isRequired,
};

export default CaseStudy;
