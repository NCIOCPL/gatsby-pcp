import React from "react"
import Layout from "../components/Layout";
import { Script } from "gatsby"
import '../styles/search.scss'

const SearchPage = () => {
	return (
	  <Layout>
		<div id="NCI-sws-app-root"></div>
		<Script id="NCI-sws-app-root-js-config" type="text/javascript">{(function() {
				window.NCI_sws_app_root_js_config = {
					"analyticsChannel": "Search",
					"analyticsContentGroup": "Global Search",
					"analyticsPublishedDate": "02\/02\/2011 - 07:00",
					"dropdownOptions": [20,50],
					"searchCollection": "doc",
					"searchSiteFilter": "dceg.cancer.gov",
					"searchEndpoint": "https:\/\/webapis.cancer.gov\/sitewidesearch\/v1\/",
					"siteName": "President's Cancer Panel",
					"title": "Search Results",
					"baseHost": "https://prescancerpanel.cancer.gov",
					"basePath": "/search",
					"canonicalHost": "https://prescancerpanel.cancer.gov",
					"language": "en",
					"rootId": "NCI-sws-app-root"
				};
				})()}
			</Script>
			<Script id="NCI-sws-app-root-js-file" src="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.3.0/static/js/main.js" type="text/javascript" onload="window.SitewideSearchApp(window.NCI_sws_app_root_js_config)" defer="defer"></Script>
	  </Layout>
	)
  }  

export default SearchPage

export function Head() {
    return (
		<head>
		<link rel="stylesheet" media="all" href="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.3.0/static/css/main-legacy.css?rq3pri" />
		<title>Search Results</title>
		</head>
    )
  }

