import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import rehypeReact from "rehype-react";
import PCPMemberList from "../components/PCPMemberList";
import FeaturedHomepageBoxes from "../components/FeaturedHomepageBoxes"
import StaffList from "../components/StaffList";
import SingleStaffMember from "../components/SingleStaffMember";
import Process from "../components/Process";
import QuestionAnswer from "../components/QuestionAnswer";
import SingleHomepageBox from "../components/SingleHomepageBox";
import SingleStaffListEntry from "../components/SingleStaffListEntry";
import ReportList from "../components/ReportList";
import SingleReportYear from "../components/SingleReportYear";
//import SEO from "../components/Seo";
//import {siteMetadata as pageContext} from "../../gatsby-config";

export default function DefaultTemplate({ data: { markdownRemark } }) {
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
				<div className="post-body">{renderAst(htmlAst)}</div>
    </Layout>
  );
}
const renderAst = new rehypeReact({
		createElement: React.createElement,
		components: {
				"featured-homepage-boxes": FeaturedHomepageBoxes,
				"pcp-member-list": PCPMemberList,
				"process": Process,
				"question-answer": QuestionAnswer,
				"report-list": ReportList,
				"staff-list":StaffList,
				"single-homepage-box":SingleHomepageBox,
				"single-report-year":SingleReportYear,
				"single-staff-list-entry":SingleStaffListEntry,
				"single-staff-member":SingleStaffMember
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

