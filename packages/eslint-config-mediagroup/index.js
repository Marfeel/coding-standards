/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

module.exports = {
	extends: [
		'@marfeel/eslint-config-js',
		'@marfeel/eslint-config-jest',
		'@marfeel/eslint-config-whitecollar'
	],
	ignorePatterns: [
		'**/*.js',
		'!**/src/**/*.js',
		'**/lib/**/*.ts',
		'**/3pi-widgets/**/*.ts'
	],
	overrides: [
		{
			files: ['**/middlewares/**/*.ts'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: [
				'@marfeel/js',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended'
			],
			rules: {
				'no-restricted-properties': ['error', {
					object: 'window',
					property: 'document'
				}],
				'class-methods-use-this': 'warn',
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/explicit-function-return-type': 2,
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-empty-function': 'error'
			}
		}
	]
};
