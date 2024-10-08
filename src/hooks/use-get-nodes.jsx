import { graphql, useStaticQuery } from 'gatsby';

export const useGetNodes = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { frontmatter: { sortOrder: ASC } }) {
				edges {
					node {
						frontmatter {
							title
							linktext
							template
							sectionTitle
							sortOrder
							date
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
