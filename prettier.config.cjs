/** @type {import("prettier").Config} */
module.exports = {
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

	importOrder: [
		'^react$',
		'^react-dom$',
		'^react/(.*)$',

		'^@/lib/(.*)$',
		'^@/pages/(.*)$',
		'^@/components/(.*)$',

		'^@/(.*)$',

		'^[./]'
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,

	trailingComma: 'none',
	tabWidth: 2,
	useTabs: true,
	semi: false,
	printWidth: 120,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	singleAttributePerLine: false
}
