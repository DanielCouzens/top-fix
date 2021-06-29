import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Aos from "aos";
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
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div className="services-wrap">
        <div className="background"></div>
        <div className="page-wrap">
          <h1>{title}</h1>

          <div className="services" id="sfs">
            <div className="service" data-aos="fade-up">
              {serviceSfs && renderRichText(serviceSfs, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={serviceSfsImage.gatsbyImageData} />
            </div>
          </div>

          <div className="page-break"></div>

          <div className="services" id="suspended-ceilings">
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={suspendedCeilingsImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {suspendedCeilings && renderRichText(suspendedCeilings, options)}
            </div>
          </div>

          <div className="page-break"></div>

          <div className="services" id="partitioning-drylining">
            <div className="service" data-aos="fade-up">
              {partitioningDrylining &&
                renderRichText(partitioningDrylining, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={partitioningDryliningImage.gatsbyImageData} />
            </div>
          </div>

          <div className="page-break"></div>

          <div className="services" id="demountable-partitioning">
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

          <div className="page-break"></div>

          <div className="services" id="carpentry-bespoke-joinery-cladding">
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

          <div className="page-break"></div>

          <div className="services" id="finishing-plastering-tape-and-joint">
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

          <div className="page-break"></div>

          <div className="services" id="acoustic-solutions">
            <div className="service" data-aos="fade-up">
              {acousticSolutions && renderRichText(acousticSolutions, options)}
            </div>
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={acousticSolutionsImage.gatsbyImageData} />
            </div>
          </div>

          <div className="page-break"></div>

          <div className="services" id="hygienic-wall-lining">
            <div className="service" data-aos="fade-up">
              <GatsbyImage image={hygienicWallLiningImage.gatsbyImageData} />
            </div>
            <div className="service" data-aos="fade-up">
              {hygienicWallLining &&
                renderRichText(hygienicWallLining, options)}
            </div>
          </div>
          <div className="page-break"></div>
          <Accreditations />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
