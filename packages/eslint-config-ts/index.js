module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'@marfeel/js',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules: {
		'class-methods-use-this': 'warn',
		'@typescript-eslint/require-await': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/no-floating-promises': 'warn'
	},
	overrides: [{
		files: ['*.test.tsx', '*.test.ts', '*.spec.tsx', '*.spec.ts'],
		rules: {
			'@typescript-eslint/unbound-method': 'off'
		}
	}]
};
