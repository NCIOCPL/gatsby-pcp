import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { SEO } from '../components/Seo';
import Image from '../components/BlogImage';
import HeroImage from '../components/HeroImage';
import '../scss/components/_blogs.scss';
import PropTypes from 'prop-types';
import { useBlogNodes } from '../hooks/use-blog-nodes';
import { useReportNodes } from '../hooks/use-report-nodes';
import { AutoLeftNavigation } from '../components/AutoLeftNavigation';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function BlogsTemplate({ frontmatter, path }) {
	function GetEdges() {
		const { edges } = useBlogNodes();
		return edges;
	}
	function GetReportEdges() {
		const { edges } = useReportNodes();
		return edges;
	}
	let myEdges = GetEdges();
	if (frontmatter.series === 'report') {
		myEdges = GetReportEdges();
	}
	let blogLinks = myEdges.map((node, index) => {
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
			<BreadCrumbs frontmatter={frontmatter} path={path}></BreadCrumbs>
			<div className={'post-body'}>
				<div className={'full-report-container'}>
					<div className={'left-nav-container'}>
						<AutoLeftNavigation path={path}></AutoLeftNavigation>
					</div>
					<div className={'report-container top-left-nav-container'}>
						<HeroImage sourcedesktop={frontmatter.bannerimage} sourcetablet={frontmatter.bannerimage} alt={''}></HeroImage>
						<h2 className={'post-title'}>{frontmatter.linktext}</h2>
						<div className={'post-body'}>{blogLinks}</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export function Head() {
	let description = 'View ' + BlogsTemplate.frontmatter.title + "from the President's Cancer Panel.";
	return (
		<>
			<html lang="en" />
			<SEO title={BlogsTemplate.frontmatter.title} description={description} />
		</>
	);
}

BlogsTemplate.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	path: PropTypes.object,
};
