import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Seo = ({
  title,
  description,
  image,
  pathname,
  article,
  schemaMarkup,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: `${siteUrl}${pathname || "/"}`,
        schemaMarkup,
      };

      return (
        <>
          <Helmet
            title={`${title} | `}
            titleTemplate={titleTemplate}
            schemaMarkup={seo.schemaMarkup}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627" />
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {schemaMarkup && (
              <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
              </script>
            )}
          </Helmet>
        </>
      );
    }}
  />
);

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
