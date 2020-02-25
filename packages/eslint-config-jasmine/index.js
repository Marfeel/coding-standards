module.exports = {
	plugins: [
		'jasmine'
	],
	extends: ['plugin:jasmine/recommended'],
	env: {
		jasmine: true
	},
	rules: {
		'jasmine/named-spy': 'error',
		'max-nested-callbacks': 'off'
	}
};
