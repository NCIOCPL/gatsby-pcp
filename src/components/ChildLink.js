import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const isActive =
	(className) =>
	({ isPartiallyCurrent }) => ({
		className: className + (isPartiallyCurrent ? ' active' : ''),
	});

const ChildLink = ({ className, children, ...props }) => (
	<Link getProps={isActive(className)} {...props}>
		{children}
	</Link>
);

ChildLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.children,
};

export default ChildLink;
