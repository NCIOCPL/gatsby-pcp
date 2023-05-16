
import { graphql } from 'gatsby'
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/Layout"
import { SEO } from "../../components/Seo"
import { LeftTopNavigation } from "../../components/LeftTopNavigation"

export default function BlogPage({ data: { allMarkdownRemark }, pageContext }) {
  const path = { relativeDirectory: "about" }
  const { edges } = allMarkdownRemark

  // Definitely not the best way to iterate through these
  const blogLinks = [];
  for (const node in edges) {
    let post = edges[node].node
    blogLinks.push(<p><Link to={"/" + post.parent.relativeDirectory + "/" + post.parent.name} >{post.frontmatter.title}</Link ></p>)
  }
  return (
    <Layout pageContext={pageContext}>
      <div className="post-body">
        <div className="full-report-container">
          <div className="left-nav-container">
            <LeftTopNavigation root={path}></LeftTopNavigation>
          </div>
          <div className="report-container top-left-nav-container">
            <h2 className={"post-title"}>Blogs</h2>
            <div className="post-body">
              {blogLinks}
            </div>
          </div></div>
      </div>
    </Layout>
  )
}

// there has got to be a better graphql query than going to the parent and getting name
// and relative directory
export const pageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {frontmatter: {template: {eq: "blog"}}}
  	sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          author
          date
          blurb
        }
        parent {
          ... on File {
            name
            relativeDirectory
          }
          
        }
      }
    }
  }
}
`;

export function Head() {
  return (
    <>
      <html lang="en" />
      <SEO title="Blogs" />
    </>
  )
}