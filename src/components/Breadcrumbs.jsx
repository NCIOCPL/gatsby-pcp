import React from 'react';
import { useGetNodes } from '../hooks/use-get-nodes';
import { Link } from 'gatsby';
import '../scss/components/_breadcrumbs.scss';
import PropTypes from 'prop-types';

export const BreadCrumbs = ({ frontmatter, path }) => {
	function linkItem(entry) {
		let sluglist = edges
			// filter to everything that starts with the same path up until the last slash
			.filter((element) => element.node.parent.relativeDirectory === entry);
		let linkList = sluglist.map((link, index) => {
			if (link.node.parent.name === 'index') {
				let displayLink = link.node.frontmatter.linktext;
				if (link.node.frontmatter.template === 'left_nav_sub_sections' && link.node.frontmatter.sortOrder === 1 && link.node.frontmatter.sectionTitle) {
					displayLink = link.node.frontmatter.sectionTitle;
				}
				return (
					<li key={index + 1} className={'breadcrumb-item'}>
						<Link to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'breadcrumb-link-item'} data-section-raw-title={displayLink} data-section-aliased-title={displayLink} data-section-id={index + 1} activeClassName={'active'}>
							{displayLink}
						</Link>
					</li>
				);
			} else return '';
		});
		return linkList;
	}

	function staticLink(url, linktext, key) {
		return (
			<li key={key} className={'breadcrumb-item'}>
				<Link to={url} className={'breadcrumb-link-item'} data-section-raw-title={linktext} data-section-aliased-title={linktext} data-section-id={key} activeClassName={'active'}>
					{linktext}
				</Link>
			</li>
		);
	}
	function staticCrumb(itemname, length) {
		let displayname = itemname.charAt(0).toUpperCase() + itemname.slice(1);
		return (
			<li key={length} className={'breadcrumb-item'}>
				{displayname}
			</li>
		);
	}

	const { edges } = useGetNodes();
	let pathEntries = path.relativeDirectory.split('/');
	let breadcrumbList = [];
	breadcrumbList.push(staticLink('/', 'Home', 0));
	let breadcrumbentry = '';
	let numberOfEntries = pathEntries.length;
	let displaylinktext = '';
	if (frontmatter.template === 'left_nav_sub_sections' && frontmatter.sortOrder === 1 && frontmatter.sectionTitle) {
		displaylinktext = frontmatter.sectionTitle;
	} else {
		if (frontmatter.linktext) {
			displaylinktext = frontmatter.linktext;
		} else if (frontmatter.title) {
			displaylinktext = frontmatter.title;
		}
	}
	pathEntries.forEach((entry, index) => {
		if (index === 0) {
			breadcrumbentry += entry;
		} else {
			breadcrumbentry += '/' + entry;
		}
		if (path.name === 'index') {
			if (index + 1 < numberOfEntries) {
				breadcrumbList.push(linkItem(breadcrumbentry));
			} else {
				breadcrumbList.push(staticCrumb(displaylinktext, numberOfEntries));
			}
		} else {
			breadcrumbList.push(linkItem(breadcrumbentry));
		}
	});
	if (path.name !== 'index') {
		let breadcrumbLength = path.length + 1;
		/*if (path.relativeDirectory === 'about/blogs') {
			let url = '/' + path.relativeDirectory;
			breadcrumbList.push(staticLink(url, 'Blogs', 2));
		}*/
		breadcrumbList.push(staticCrumb(displaylinktext, breadcrumbLength));
	}

	return (
		<div className={'breadcrumb'}>
			<ul role={'navigation'} className={'breadcrumb-list'}>
				{breadcrumbList}
			</ul>
		</div>
	);
};

BreadCrumbs.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	path: PropTypes.object.isRequired,
};
