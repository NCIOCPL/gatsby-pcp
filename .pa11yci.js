const glob = require('glob');
const path = require('path');

// Static files that get copied to build folder
const publicFolder = path.resolve(__dirname, './public');
const htmlFiles = glob.sync(path.join(publicFolder, '**', '*.html'), {
	// eventually we should remove **/report/** from here but
	// there are a lot of fixes to be done down in that folder first
	ignore: ['**/page-data/**', '**/admin/**', '**/_gatsby/**', '**/report/**'],
});

const baseurl = process.env.PA11Y_BASE_URL ?? 'http://localhost:9000';

const urls = htmlFiles.map((htmlFile) => {
	const url = htmlFile.replace(publicFolder, baseurl);
	return {
		url,
	};
});

module.exports = {
	defaults: {
		standard: 'WCAG2AA', // Default is WCAG2AA, but leaving this here as a note.
		chromeLaunchConfig: {
			executablePath: '/usr/bin/google-chrome',
		},
	},
	urls: urls,
	chromeLaunchConfig: {
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
	},
};
