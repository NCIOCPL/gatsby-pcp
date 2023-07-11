const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Static files that get copied to build folder
const publicFolder = path.resolve(__dirname, './public');
const htmlFiles = glob.sync(path.join(publicFolder, '**', '*.html'), {
	// eventually we should remove **/report/** from here but
	// there are a lot of fixes to be done down in that folder first
	ignore: ['**/page-data/**', '**/admin/**', '**/_gatsby/**'],
});

const baseurl = process.env.PA11Y_BASE_URL ?? 'http://localhost:9000';

const urls = htmlFiles.map((htmlFile) => {
	const url = htmlFile.replace(publicFolder, baseurl);
	let ignore = [];

	// Static reports use custom JS that adds this in the browser
	// This link points to a named anchor "addtoany" within the document, but no anchor exists with that name.
	if (htmlFile.replace(publicFolder, '').startsWith('/report/'))
		ignore.push('WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID');
		
	return {
		url,
		ignore: ignore,
	};
});

let config = {
	defaults: {
		standard: 'WCAG2AA', // Default is WCAG2AA, but leaving this here as a note.
		chromeLaunchConfig: {
			args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
		},
	},
	urls: urls,
};

const chromeExecutablePath = '/usr/bin/google-chrome';
if (fs.existsSync(chromeExecutablePath)) {
	config.defaults.chromeLaunchConfig.executablePath = chromeExecutablePath;
}

module.exports = config;
