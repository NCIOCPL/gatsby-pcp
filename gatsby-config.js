/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `President's Cancer Panel`,
		slogan: 'Advisors to the President on the National Cancer Program',
		description: `The President's Cancer Panel monitors the activities of the National Cancer Program and reports to the President of the United States on barriers to progress in reducing the burden of cancer.`,
		siteUrl: `https://prescancerpanel.cancer.gov`,
		footerLinks: [
				{
						name: 'PresCancerPanel@mail.nih.gov',
						link: 'mailto:PresCancerPanel@mail.nih.gov'
				},
				{
						name: 'HHS Vulnerability Disclosure',
						link: 'https://www.hhs.gov/vulnerability-disclosure-policy/index.html'
				}
		],
		iconLinks: [
			{
					name: 'Twitter',
					link: 'https://twitter.com/prescancerpanel',
					height: 48,
					width: 48
			},
			{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/company/president\'s-cancer-panel/',
					height: 48,
					width: 48
			},
			{
					name: 'email',
					link: 'mailto:PresCancerPanel@mail.nih.gov',
					height: 48,
					width: 48
			}
		],
		menuLinks:[
			{
				name: 'Home',
				link: '/'
			},
			{
					name: 'Members',
					link: '/members/'
			},
			{
					name: 'About',
					link: '/about/',
					sublinks: [
							{
									name: 'History',
									link: '/about/history'
							},
							{
									name: 'Process',
									link: '/about/process'
							},
							{
									name: 'Staff',
									link: '/about/staff'
							},
							{
									name: 'Blogs',
									link: '/about/blogs',
									sublinks: [
											{
													name: '50th Anniversary',
													link: '/nca50/1'
											}
									],
							},
					]
			},
			{
					name: 'Reports & Meetings',
					link: '/reports/'
			},
		]
	},
	pathPrefix: process.env.PREFIX_PATH
		  ? process.env.PREFIX_PATH
		  : undefined,
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
