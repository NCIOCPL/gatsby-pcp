import { graphql, useStaticQuery } from 'gatsby';

export const useReportNodes = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(filter: { frontmatter: { template: { eq: "blog" }, series: { eq: "report" } } }, sort: { frontmatter: { date: DESC } }) {
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
	`);
	return data.allMarkdownRemark;
};
