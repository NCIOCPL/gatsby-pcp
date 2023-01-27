/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `President's Cancer Panel | Advisors to the President on the National Cancer Program`,
    description: `The President's Cancer Panel monitors the activities of the National Cancer Program and reports to the President of the United States on barriers to progress in reducing the burden of cancer.`,
    siteUrl: `https://prescancerpanel.cancer.gov`
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/content/pages/"
    },
    __key: "pages"
  },
  "gatsby-transformer-remark",
]
};