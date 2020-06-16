module.exports = {
	globals: {
		WC: 'readonly'
	},
	plugins: [
		'@marfeel/whitecollar'
	],
	rules: {
		'test-rule': 'off',
		'@marfeel/whitecollar/no-get-balcon': 'error'
	}
};
