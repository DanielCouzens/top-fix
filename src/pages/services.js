import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PageNav from "../components/PageNav";
import Hero from "../components/HeroTwo";
import Aos from "aos";
import topFix from "../images/top-fix.svg";
import "../../node_modules/aos/dist/aos.css";
import Accreditations from "../components/Accreditations";

export const pageQuery = graphql`
  query MyQuery {
    contentfulServicesPage {
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      serviceSfs {
        raw
      }
      serviceSfsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      suspendedCeilings {
        raw
      }
      suspendedCeilingsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      partitioningDrylining {
        raw
      }
      partitioningDryliningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      demountablePartitioning {
        raw
      }
      demountablePartitioningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      carpentryBespokeJoineryTimberCladding {
        raw
      }
      carpentryBespokeJoineryTimberCladdingImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      finishingPlasteringTapeAndJoint {
        raw
      }
      finishingPlasteringTapeAndJointImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      acousticSolutions {
        raw
      }
      acousticSolutionsImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
      }
      hygienicWallLining {
        raw
      }
      hygienicWallLiningImage {
        gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.4)
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
    heroImage,
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
      <Hero title={title} image={heroImage.gatsbyImageData} />
      <PageNav />
      <div className="services-wrap">
        <div className="background"></div>
        <div className="page-wrap">
          <div className="services">
            <span id="sfs"></span>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage image={serviceSfsImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {serviceSfs && renderRichText(serviceSfs, options)}
            </div>
          </div>

          <div className="services">
            <span id="suspended-ceilings"></span>
            <div className="service" data-aos="fade-up">
              {suspendedCeilings && renderRichText(suspendedCeilings, options)}
            </div>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage image={suspendedCeilingsImage.gatsbyImageData} />
            </div>
          </div>

          <div className="services">
            <span id="partitioning-drylining"></span>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage image={partitioningDryliningImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {partitioningDrylining &&
                renderRichText(partitioningDrylining, options)}
            </div>
          </div>

          <div className="services">
            <span id="demountable-partitioning"></span>
            <div className="service" data-aos="fade-up">
              {demountablePartitioning &&
                renderRichText(demountablePartitioning, options)}
            </div>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage
                image={demountablePartitioningImage.gatsbyImageData}
              />
            </div>
          </div>

          <div data-aos="fade-left" className="page-break">
            <div className="bars-wrap">
              <img src={topFix} height="50" width="50" alt="topfix styling" />
            </div>
          </div>

          <Carousel />

          <div className="services">
            <span id="carpentry-bespoke-joinery-cladding"></span>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage
                image={
                  carpentryBespokeJoineryTimberCladdingImage.gatsbyImageData
                }
              />
            </div>
            <div className="service" data-aos="fade-up">
              {carpentryBespokeJoineryTimberCladding &&
                renderRichText(carpentryBespokeJoineryTimberCladding, options)}
            </div>
          </div>

          <div className="services">
            <span id="finishing-plastering-tape-and-joint"></span>
            <div className="service" data-aos="fade-up">
              {finishingPlasteringTapeAndJoint &&
                renderRichText(finishingPlasteringTapeAndJoint, options)}
            </div>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage
                image={finishingPlasteringTapeAndJointImage.gatsbyImageData}
              />
            </div>
          </div>

          <div className="services">
            <span id="acoustic-solutions"></span>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage image={acousticSolutionsImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {acousticSolutions && renderRichText(acousticSolutions, options)}
            </div>
          </div>

          <div className="services">
            <span id="hygienic-wall-lining"></span>
            <div className="service" data-aos="fade-up">
              {hygienicWallLining &&
                renderRichText(hygienicWallLining, options)}
            </div>
            <div className="service service-image" data-aos="fade-up">
              <div className="before-image" data-aos="fade-left"></div>
              <GatsbyImage image={hygienicWallLiningImage.gatsbyImageData} />
            </div>
          </div>
          <Accreditations />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
