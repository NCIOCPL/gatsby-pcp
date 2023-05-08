import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					slogan
					description
					siteUrl
					searchEndpoint
					searchDomain
					footerLinks {
						name
						link
					}
					iconLinks {
						name
						text
						link
						height
						width
					}
					menuLinks {
						name
						link
						sublinks {
							name
							link
						}
					}
				}
			}
		}
	`);

	return data.site.siteMetadata;
};
