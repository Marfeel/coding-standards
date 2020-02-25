
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'@marfeel/ts',
		'@marfeel/react'
	],
	rules: {
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.tsx']
			}
		],
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true
			}
		]
	}
};
