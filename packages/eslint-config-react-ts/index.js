
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
		'react/prop-types': 'off'
	}
};
