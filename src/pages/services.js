import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Aos from "aos";
import topFix from "../images/top-fix.svg";
import "../../node_modules/aos/dist/aos.css";
import Accreditations from "../components/Accreditations";

export const pageQuery = graphql`
  query MyQuery {
    contentfulServicesPage {
      serviceSfs {
        raw
      }
      serviceSfsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      suspendedCeilings {
        raw
      }
      suspendedCeilingsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      partitioningDrylining {
        raw
      }
      partitioningDryliningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      demountablePartitioning {
        raw
      }
      demountablePartitioningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      carpentryBespokeJoineryTimberCladding {
        raw
      }
      carpentryBespokeJoineryTimberCladdingImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      finishingPlasteringTapeAndJoint {
        raw
      }
      finishingPlasteringTapeAndJointImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      acousticSolutions {
        raw
      }
      acousticSolutionsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      hygienicWallLining {
        raw
      }
      hygienicWallLiningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5, height: 400)
      }
      title
    }
  }
`;

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a target="_blank" rel="noreferrer" href={node.data.uri}>
        {children}
      </a>
    ),
  },
};

const Services = ({ data }) => {
  const {
    serviceSfs,
    serviceSfsImage,
    suspendedCeilings,
    suspendedCeilingsImage,
    partitioningDrylining,
    partitioningDryliningImage,
    demountablePartitioning,
    demountablePartitioningImage,
    carpentryBespokeJoineryTimberCladding,
    carpentryBespokeJoineryTimberCladdingImage,
    finishingPlasteringTapeAndJoint,
    finishingPlasteringTapeAndJointImage,
    acousticSolutions,
    acousticSolutionsImage,
    hygienicWallLining,
    hygienicWallLiningImage,
    title,
  } = data.contentfulServicesPage;

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <Layout>
      <div className="services-wrap">
        <div className="background"></div>
        <div className="page-wrap" id="sfs">
          <h1>{title}</h1>

          <div className="services">
            <div className="service" data-aos="fade-up">
              {serviceSfs && renderRichText(serviceSfs, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={serviceSfsImage.gatsbyImageData} />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="page-break"
            id="suspended-ceilings">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={suspendedCeilingsImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {suspendedCeilings && renderRichText(suspendedCeilings, options)}
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="page-break"
            id="partitioning-drylining">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              {partitioningDrylining &&
                renderRichText(partitioningDrylining, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={partitioningDryliningImage.gatsbyImageData} />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="page-break"
            id="demountable-partitioning">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              <GatsbyImage
                image={demountablePartitioningImage.gatsbyImageData}
              />
            </div>
            <div className="service" data-aos="fade-up">
              {demountablePartitioning &&
                renderRichText(demountablePartitioning, options)}
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="page-break"
            id="carpentry-bespoke-joinery-cladding">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              {carpentryBespokeJoineryTimberCladding &&
                renderRichText(carpentryBespokeJoineryTimberCladding, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage
                image={
                  carpentryBespokeJoineryTimberCladdingImage.gatsbyImageData
                }
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="page-break"
            id="finishing-plastering-tape-and-joint">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              <GatsbyImage
                image={finishingPlasteringTapeAndJointImage.gatsbyImageData}
              />
            </div>
            <div className="service" data-aos="fade-up">
              {finishingPlasteringTapeAndJoint &&
                renderRichText(finishingPlasteringTapeAndJoint, options)}
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="page-break"
            id="acoustic-solutions">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              {acousticSolutions && renderRichText(acousticSolutions, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={acousticSolutionsImage.gatsbyImageData} />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="page-break"
            id="hygienic-wall-lining">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <div className="services">
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={hygienicWallLiningImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {hygienicWallLining &&
                renderRichText(hygienicWallLining, options)}
            </div>
          </div>

          <div
            // data-aos="fade-right"
            className="page-break"
            id="hygienic-wall-lining">
            {/* <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div> */}
          </div>
          <Accreditations />
          <div
            // data-aos="fade-left"
            className="page-break"
            id="hygienic-wall-lining">
            {/* <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div> */}
          </div>
          <Carousel />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
