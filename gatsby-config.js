require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Topfix Interiors Ltd",
    siteUrl: "https://www.topfix-interiors.co.uk/",
    author: {
      name: "Net Frontier",
      minibio: `
      We are a web design company that creates fast, gorgeous, secure, user-friendly websites, designed to be future proof and optimised for the real world.
      `,
    },
    titleTemplate: "%s Expert Interior Solutions",
    description:
      "Topfix Interiors are an established interior fit out company based in Bristol, we deliver top class interior solutions to all sectors of the construction industry; education, leisure, hotels, offices, custodial, health and retail across England and Wales.",
    siteUrl: "http://www.topfix-interiors.co.uk/",
    url: "http://www.topfix-interiors.co.uk/",
    // No trailing slash allowed!
    defaultImage: "/src/images/Topfix-Default.jpg",
    image: "/src/images/Topfix-Default.jpg",
    logo: "/src/images/icon.png",

    organization: {
      name: "Topfix Interiors Ltd",
      url: "http://www.topfix-interiors.co.uk/services",
      logo: "./images/icon.png",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://stats.g.doubleclick.net",
          "https://www.google.co.uk",
          "https://www.google.com",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lato",
              variants: ["300", "700", "900"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
