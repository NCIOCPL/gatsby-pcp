import React from 'react';
import { getNodes } from '../hooks/get-nodes';
import { Link } from 'gatsby';
import '../scss/components/_left-nav-multipage.scss';
import PropTypes from 'prop-types';

export const LeftNavigation = ({ path }) => {
	const { edges } = getNodes();
	let sluglist = edges
		// filter to everything that starts with the same path up until the last slash
		.filter((element) => element.node.parent.relativeDirectory.includes(path.relativeDirectory));
	let linkList = sluglist.map((link, index) => {
		return (
			<li key={index} className={'nav-item'}>
				<Link to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={link.node.frontmatter.linktext} data-section-aliased-title={link.node.frontmatter.linktext} data-section-id={index} activeClassName={'active'}>
					{link.node.frontmatter.linktext}
				</Link>
			</li>
		);
	});

	return (
		<div className={'left-nav'}>
			<ul>{linkList}</ul>
		</div>
	);
};

LeftNavigation.propTypes = {
	path: PropTypes.object.isRequired,
};
