import React from "react";
import Layout from "../components/Layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCaseStudies {
        edges {
          node {
            caseStudiesTitle
            caseStudiesMainPhoto {
              gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.7)
            }
            caseStudiesText {
              raw
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="cases-studies-gallery-container">
        <div className="case-studies-gallery">
          {data.allContentfulCaseStudies.edges.map((edge) => {
            return (
              <Link
                className="case-study-link"
                to={`/case-study/${edge.node.caseStudiesTitle
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}>
                <div className="case-studies-info">
                  <div className="case-info-wrap">
                    <h2>{edge.node.caseStudiesTitle}</h2>
                    <div className="red-line"></div>
                    {edge.node.caseStudiesText &&
                      renderRichText(edge.node.caseStudiesText)}
                  </div>
                </div>

                <GatsbyImage
                  image={edge.node.caseStudiesMainPhoto.gatsbyImageData}
                  className="case-studies-image"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
