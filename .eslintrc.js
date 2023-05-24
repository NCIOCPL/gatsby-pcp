module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'@nciocpl/eslint-config-react'
	],
	globals: {
		getFixture: true,
	},
	overrides: [
		{
			files: ['*.md', '*.mdx'],
			// parser: "eslint-mdx", // this is set by `plugin:mdx/recommended` automatically
			extends: ['plugin:mdx/recommended'],
		},
	],
};
