module.exports = {
	extends: ['plugin:node/recommended'],
	rules: {
		'callback-return': ['error', ['callback', 'cb', 'done']],
		'global-require': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-exit': 'warn',
		'node/no-unpublished-require': 'off'
	}
};
