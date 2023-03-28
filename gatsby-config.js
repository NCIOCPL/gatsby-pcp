/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `President's Cancer Panel | Advisors to the President on the National Cancer Program`,
		description: `The President's Cancer Panel monitors the activities of the National Cancer Program and reports to the President of the United States on barriers to progress in reducing the burden of cancer.`,
		siteUrl: `https://prescancerpanel.cancer.gov`
	},
	trailingSlash: 'never',
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				sassOptions: {
					includePaths: [
						"./node_modules/@uswds/uswds/packages/",
						"src/scss/"
					],
				}
			}
		},
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-sitemap',
		'gatsby-remark-component',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				'name': 'pages',
				'path': './src/content/pages/'
			},
			__key: 'pages'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				'name': 'images',
				'path': './src/images/'
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					}
				]
			}
		},

	]
};
