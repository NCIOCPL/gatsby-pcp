import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ src, ...rest }) => {
	const data = useStaticQuery(graphql`
		query {
			images: allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
				edges {
					node {
						relativePath
						extension
						publicURL
						childImageSharp {
							fluid(maxWidth: 1000, maxHeight: 1100) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);

	const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src]);

	if (!match) return null;

	const { node: { childImageSharp, publicURL, extension } = {} } = match;

	let altText = '';
		if (rest.alt){
				altText = rest.alt;
		}
	if (extension === 'svg' || !childImageSharp) {
		return <img src={publicURL} alt={altText} {...rest} />;
	}

	return <Img fluid={childImageSharp.fluid} {...rest} />;
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
};

export default Image;
