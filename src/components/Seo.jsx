import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';

export const SEO = ({ title, description, pathname, children }) => {
	const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();
	const location = useLocation();

	const seo = {
		title: title !== undefined ? title + ' - ' + defaultTitle : defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
	};

	return (
		<>
			<title>{seo.title}</title>
			<link rel="canonical" href={location.href} />
			<meta name="description" content={seo.description} />
			<script src="https://assets.adobedtm.com/6a4249cd0a2c/785de09de161/launch-70d67a6a40a8.min.js"></script>
			{children}
		</>
	);
};

SEO.propTypes = {
	title: PropTypes.array,
	description: PropTypes.string,
	pathname: PropTypes.string,
	children: PropTypes.node,
};
