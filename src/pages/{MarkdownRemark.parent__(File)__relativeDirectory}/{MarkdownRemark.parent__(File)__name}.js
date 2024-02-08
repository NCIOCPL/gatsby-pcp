import { graphql } from 'gatsby';
import * as React from 'react';
import { SEO } from '../../components/Seo';
import SinglePageTemplate from '../../templates/SinglePage';
import LeftNavTemplate from '../../templates/LeftNav';
import LeftNavsSubSectionsTemplate from '../../templates/LeftNavSubSections';
import BlogTemplate from '../../templates/Blog';
import PropTypes from 'prop-types';
import BlogsTemplate from '../../templates/Blogs';

export default function GeneratedPage({ data: { markdownRemark } }) {
	const { frontmatter, htmlAst, parent } = markdownRemark;
	const templates = {
		blogs: <BlogsTemplate frontmatter={frontmatter} path={parent} />,
		blog: <BlogTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		left_nav: <LeftNavTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		left_nav_sub_sections: <LeftNavsSubSectionsTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
		single_page: <SinglePageTemplate frontmatter={frontmatter} htmlAst={htmlAst} path={parent} />,
	};

	return templates[frontmatter.template];
}

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			htmlAst
			frontmatter {
				title
				description
				template
				sectionTitle
				author
				linktext
				sortOrder
				series
				bannerimage
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

/*eslint-disable react/prop-types*/
export function Head({ data: { markdownRemark } }) {
	const { frontmatter } = markdownRemark;
	return (
		<>
			<html lang="en" />
			<SEO title={frontmatter.title} description={frontmatter.description} />
		</>
	);
}
/*eslint-enable react/prop-types*/

GeneratedPage.propTypes = {
	data: PropTypes.object,
};
