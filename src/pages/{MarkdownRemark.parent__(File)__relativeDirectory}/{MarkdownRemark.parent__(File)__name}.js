import { graphql } from "gatsby";
import * as React from "react";
import { SEO } from "../../components/Seo";
import SinglePageTemplate from "../../templates/SinglePage";
import LeftNavTemplate from "../../templates/LeftNav";
import LeftNavsSubSectionsTemplate from "../../templates/LeftNavSubSections";
import BlogTemplate from "../../templates/Blog";

export default function GeneratedPage({ data: { markdownRemark }, pageContext }) {
	const { frontmatter, htmlAst, parent } = markdownRemark;
	const templates = {
		blog: <BlogTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} pageContext={pageContext} />,
		left_nav: <LeftNavTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} pageContext={pageContext} />,
		left_nav_sub_sections: <LeftNavsSubSectionsTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} pageContext={pageContext} />,
		single_page: <SinglePageTemplate frontmatter={frontmatter} htmlAst={htmlAst} pageContext={pageContext} />,
	};

	return templates[frontmatter.template];
};

export const pageQuery = graphql`
query ($id: String!) {
	markdownRemark(id: { eq: $id }) {
	htmlAst
	frontmatter {
		title
		template
		sectionTitle
		author
	}
		parent {
			... on File {
				name
				relativeDirectory
			}
			
		}
	}
}
`;

export function Head({ data: { markdownRemark } }) {
	const { frontmatter } = markdownRemark;
	return (
		<>
			<html lang="en" />
			<SEO title={frontmatter.title} />
		</>
	)
}