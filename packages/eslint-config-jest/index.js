module.exports = {
	plugins: [
		'jest'
	],
	env: {
		commonjs: true
	},
	extends: ['plugin:jest/recommended'],
	rules: {
		'max-nested-callbacks': 'off',
		'jest/no-alias-methods': 'error',
		'jest/no-jasmine-globals': 'error',
		'jest/consistent-test-it': [
			'error',
			{
				fn: 'test',
				withinDescribe: 'test'
			}
		]
	}
};

