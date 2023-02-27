import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
//import { Helmet } from 'react-helmet';
//import SEO from "../components/Seo";
//import {siteMetadata as pageContext} from "../../gatsby-config";

export default function DefaultTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

/*export function Head() {
    return (
				<>
				<html lang="en" />
				<body className="html" />
      	{/!*<title>{pageContext.title}</title>*!/}
				</>
    )
  }*/

