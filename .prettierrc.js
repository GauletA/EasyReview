// module.exports = {
// 	...require('@tools/reactore/config/prettierrc.config'),
// 	plugins: [require('prettier-plugin-tailwindcss')]
// }

module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: true,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	vueIndentScriptAndStyle: true,
	printWidth: 120,
	tabWidth: 4,
	plugins: [require('prettier-plugin-tailwindcss')]
}
