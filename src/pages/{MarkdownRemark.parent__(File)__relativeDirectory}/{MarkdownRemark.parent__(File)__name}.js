import { graphql } from 'gatsby';
import * as React from 'react';
import { SEO } from '../../components/Seo';
import SinglePageTemplate from '../../templates/SinglePage';
import LeftNavTemplate from '../../templates/LeftNav';
import LeftNavsSubSectionsTemplate from '../../templates/LeftNavSubSections';
import BlogTemplate from '../../templates/Blog';
import PropTypes from 'prop-types';

export default function GeneratedPage({ data: { markdownRemark } }) {
	const { frontmatter, htmlAst, parent } = markdownRemark;
	const templates = {
		blog: <BlogTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		left_nav: <LeftNavTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		left_nav_sub_sections: <LeftNavsSubSectionsTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		single_page: <SinglePageTemplate frontmatter={frontmatter} htmlAst={htmlAst} />,
	};

	return templates[frontmatter.template];
}

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
	);
}

GeneratedPage.propTypes = {
	data: PropTypes.object,
};

Head.propTypes = {
	data: PropTypes.object,
};
