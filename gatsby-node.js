const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const casesTemplate = path.resolve("./src/templates/case-study.js");
  const res = await graphql(`
    query {
      allContentfulCaseStudies {
        edges {
          node {
            caseStudiesTitle
          }
        }
      }
    }
  `);

  res.data.allContentfulCaseStudies.edges.forEach((edge) => {
    createPage({
      component: casesTemplate,
      path: `/case-study/${edge.node.caseStudiesTitle
        .split(" ")
        .join("-")
        .toLowerCase()}`,
      context: {
        caseStudiesTitle: edge.node.caseStudiesTitle,
      },
    });
  });
};
