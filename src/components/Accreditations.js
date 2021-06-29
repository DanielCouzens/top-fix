import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const Accreditations = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        accreditations {
          gatsbyImageData(layout: CONSTRAINED, quality: 100, height: 50)
          id
          title
        }
      }
    }
  `);

  const accreditations = data.contentfulHomePage.accreditations;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="accreditations" data-aos="fade-up">
      <h2 data-aos="fade-up">Accreditations</h2>
      <div className="accreditations-logo" data-aos="fade-left">
        {accreditations.map((img) => (
          <GatsbyImage
            image={img.gatsbyImageData}
            alt={img.title}
            key={img.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Accreditations;
