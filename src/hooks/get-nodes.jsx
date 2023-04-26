import React from "react";
import {graphql, useStaticQuery} from "gatsby";

export const getNodes = () => {
		const data  = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: {frontmatter: {slug: ASC}}) {
				edges {
					node {
						frontmatter {
							title
							slug
							linktext
						}
					}
				}
			}
		}
 `);
		return data.allMarkdownRemark;
};
