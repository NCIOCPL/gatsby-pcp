import React from 'react';
import Layout from '../components/Layout';
import { Script, withPrefix } from 'gatsby';
import '../scss/search.scss';
import { SEO } from '../components/Seo';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const SearchPage = () => {
	const { title, siteUrl, searchEndpoint, searchDomain } = useSiteMetadata();
	return (
		<Layout>
			<div id="NCI-sws-app-root"></div>
			<Script id="NCI-sws-app-root-js-config" type="text/javascript">
				{(function () {
					// Make gatsby build happy when window doesn't exist
					if (typeof window === 'undefined') {
						global.window = {};
					}

					window.NCI_sws_app_root_js_config = {
						analyticsChannel: 'Search',
						analyticsContentGroup: 'Global Search',
						analyticsPublishedDate: '02/02/2011 - 07:00',
						dropdownOptions: [20, 50],
						searchCollection: 'doc',
						searchSiteFilter: searchDomain,
						searchEndpoint: searchEndpoint,
						siteName: title,
						title: 'Search Results',
						baseHost: siteUrl,
						basePath: withPrefix('/search'),
						canonicalHost: siteUrl,
						language: 'en',
						rootId: 'NCI-sws-app-root',
					};
				})()}
			</Script>
			<Script id="NCI-sws-app-root-js-file" src="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.3.0/static/js/main.js" type="text/javascript" onload="window.SitewideSearchApp(window.NCI_sws_app_root_js_config)" defer="defer"></Script>
		</Layout>
	);
};

export default SearchPage;

export function Head() {
	return (
		<>
			<html lang="en" />
			<link rel="stylesheet" media="all" href="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.3.0/static/css/main-legacy.css?rq3pri" />
			<SEO title="Search Results" />
		</>
	);
}
