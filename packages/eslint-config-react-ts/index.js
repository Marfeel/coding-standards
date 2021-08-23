
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'@marfeel/react',
		'@marfeel/ts'
	],
	rules: {
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.ts', '.tsx']
			}
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error'
	}
};
