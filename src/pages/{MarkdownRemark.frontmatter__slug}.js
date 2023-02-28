import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function DefaultTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
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

export function Head() {
    return (
      <title>Hello World</title>
    )
  }

