module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'../base/.eslintrc',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules: {
		'class-methods-use-this': 'warn',
		'@typescript-eslint/require-await': 'off'
	}
};
