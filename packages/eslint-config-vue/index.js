module.exports = {
	extends: [
		'plugin:vue/recommended'
	],
	rules: {
		'no-shadow': 0,
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			closeBracket: 0,
			ignores: []
		}],
		'vue/require-default-prop': 0,
		'vue/max-attributes-per-line': 0,
		'vue/valid-template-root': 'warn'
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 8,
		sourceType: 'module'
	}
};
