import { graphql } from 'gatsby';
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import { SEO } from '../../components/Seo';
import { LeftTopNavigation } from '../../components/LeftTopNavigation';
import Image from '../../components/BlogImage';
import '../../scss/components/_blogs.scss';
import PropTypes from 'prop-types';

export default function BlogPage({ data: { allMarkdownRemark } }) {
	const path = { relativeDirectory: 'about' };
	const { edges } = allMarkdownRemark;
	let blogLinks = edges.map((node, index) => {
		let post = node.node;
		let blogDate;
		let blogImage = '';
		let blogImageAlt;
		if (post.frontmatter.date) {
			blogDate = post.frontmatter.date;
		}

		if (post.frontmatter.alt) {
			blogImageAlt = post.frontmatter.alt;
		}
		if (post.frontmatter.image) {
			blogImage = post.frontmatter.image;
		}

		return (
			<div className={'blog-list-item'} key={index}>
				<div className={'blog-list-item-image'}>
					<Image src={blogImage} alt={blogImageAlt} />
				</div>
				<div className={'blog-list-item-text-container'}>
					<span className={'blog-list-item-title'}>
						<Link to={'/' + post.parent.relativeDirectory + '/' + post.parent.name}>{post.frontmatter.title}</Link>
					</span>
					<div className={'blog-list-item-date-and-author'}>
						<span className={'blog-list-item-date'}>{blogDate}</span>
					</div>
					<div className={'blog-list-item-description'}>{post.frontmatter.blurb}</div>
				</div>
			</div>
		);
	});

	return (
		<Layout>
			<div className="post-body">
				<div className="full-report-container">
					<div className="left-nav-container">
						<LeftTopNavigation root={path}></LeftTopNavigation>
					</div>
					<div className="report-container top-left-nav-container">
						<h2 className={'post-title'}>Blogs</h2>
						<div className="post-body">{blogLinks}</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

// there has got to be a better graphql query than going to the parent and getting name
// and relative directory
export const pageQuery = graphql`
	query {
		allMarkdownRemark(filter: { frontmatter: { template: { eq: "blog" } } }, sort: { frontmatter: { date: DESC } }) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						blurb
						image
						alt
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
			<SEO title="Blogs" description="View blogs from the President's Cancer Panel." />
		</>
	);
}

BlogPage.propTypes = {
	data: PropTypes.object,
};
