import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import rehypeReact from "rehype-react";
import ImageWithCaption from "../components/ImageWithCaption";
import { LeftNavigation } from "../components/LeftNavigation";
import Meetings from "../components/Meetings";
import PictureWithQuotes from "../components/PictureWithQuotes";
import QuestionAnswer from "../components/QuestionAnswer";
import SingleHomepageBox from "../components/SingleHomepageBox";
import SingleLeftNavigationItem from "../components/SingleLeftNavigationItem";
import SingleReportYear from "../components/SingleReportYear";
import SingleStaffListEntry from "../components/SingleStaffListEntry";
import SingleStaffMember from "../components/SingleStaffMember";
//import SEO from "../components/Seo";
//import {siteMetadata as pageContext} from "../../gatsby-config";

export default function DefaultTemplate({ data: { markdownRemark } }) {
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Layout>
      <h2 className={"post-title"}>{frontmatter.title}</h2>
				<div className="post-body">{renderAst(htmlAst)}</div>
    </Layout>
  );
}
const renderAst = new rehypeReact({
		createElement: React.createElement,
		components: {
				"image-with-caption": ImageWithCaption,
				"left-navigation": LeftNavigation,
				"meetings": Meetings,
				"picture-with-quotes": PictureWithQuotes,
				"question-answer": QuestionAnswer,
				"single-homepage-box": SingleHomepageBox,
				"single-left-navigation-item": SingleLeftNavigationItem,
				"single-report-year": SingleReportYear,
				"single-staff-list-entry": SingleStaffListEntry,
				"single-staff-member": SingleStaffMember
		},
}).Compiler

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
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

