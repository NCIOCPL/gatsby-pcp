/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteDomain = process.env.SITE_DOMAIN ? process.env.SITE_DOMAIN : 'prescancerpanel.cancer.gov';
const siteUrl = 'https://' + siteDomain;

module.exports = {
	siteMetadata: {
		title: `President's Cancer Panel`,
		slogan: 'Advisors to the President on the National Cancer Program',
		description: `The President's Cancer Panel monitors the activities of the National Cancer Program and reports to the President of the United States on barriers to progress in reducing the burden of cancer.`,
		siteUrl: siteUrl,
		searchDomain: process.env.SEARCH_DOMAIN ? process.env.SEARCH_DOMAIN : siteDomain,
		searchEndpoint: process.env.SEARCH_ENDPOINT ? process.env.SEARCH_ENDPOINT : 'https://webapis.cancer.gov/sitewidesearch/v1/',
		footerLinks: [
			{
				name: 'PresCancerPanel@mail.nih.gov',
				link: 'mailto:PresCancerPanel@mail.nih.gov',
			},
			{
				name: 'HHS Vulnerability Disclosure',
				link: 'https://www.hhs.gov/vulnerability-disclosure-policy/index.html',
			},
		],
		iconLinks: [
			{
				name: 'X',
				text: 'Visit us on X',
				link: 'https://twitter.com/prescancerpanel',
				height: 48,
				width: 48,
			},
			{
				name: 'Linkedin',
				text: 'Visit us on LinkedIn',
				link: "https://www.linkedin.com/company/president's-cancer-panel/",
				height: 48,
				width: 48,
			},
			{
				name: 'email',
				text: 'Email us',
				link: 'mailto:PresCancerPanel@mail.nih.gov',
				height: 48,
				width: 48,
			},
		],
		menuLinks: [
			{
				name: 'Members',
				link: '/members/',
			},
			{
				name: 'About',
				link: '/about/',
				sublinks: [
					{
						name: 'History',
						link: '/about/history',
					},
					{
						name: 'Process',
						link: '/about/process',
					},
					{
						name: 'Staff',
						link: '/about/staff',
					},
					{
						name: 'Blogs',
						link: '/about/blogs',
					},
				],
			},
			{
				name: 'Reports & Meetings',
				link: '/reports/',
			},
				{
						name: 'National Cancer Plan',
						link: '/ncp/',
						sublinks: [
								{
										name: 'Reports',
										link: '/ncp/reports',
								},
								{
										name: 'Digital Toolkit',
										link: '/ncp/digital-toolkit',
								},
								{
										name: 'Media Advisory',
										link: '/ncp/media-advisory',
								},
								{
										name: 'Meetings',
										link: '/ncp/meetings',
								}
						],
				},
		],
	},
	pathPrefix: process.env.PREFIX_PATH ? process.env.PREFIX_PATH : undefined,
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					includePaths: ['./node_modules/@uswds/uswds/packages/', 'src/scss/'],
				},
			},
		},
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-sitemap',
		'gatsby-remark-component',
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: siteUrl,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './content/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
		},
			{
					resolve: 'gatsby-source-filesystem',
					options: {
							name: 'uswdsimages',
							path: './node_modules/@uswds/uswds/dist/img/',
					},
			},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
			'gatsby-plugin-image',
			'gatsby-plugin-sharp',
			'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 800,
							loading: 'eager',
						},
					},
				],
			},
		},
	],
};
