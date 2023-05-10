import { graphql, useStaticQuery } from "gatsby";

export const getNodes = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: {frontmatter: {sortOrder: ASC}}) {
				edges {
					node {
						frontmatter {
							linktext
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
 `);
	return data.allMarkdownRemark;
};
