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

const projectRoot = `${__dirname}/../../../`;

module.exports = {
	extends: [
		'@marfeel/eslint-config-js',
		'@marfeel/eslint-config-jest',
		'@marfeel/eslint-config-whitecollar'
	],
	overrides: [
		{
			files: ['**/middlewares/**/*.ts'],
			extends: [
				'@marfeel/eslint-config-ts'
			],
			parserOptions: {
				tsconfigRootDir: projectRoot,
				project: './tsconfig.json'
			},
			rules: {
				'no-restricted-properties': ['error', {
					object: 'window',
					property: 'document'
				}]
			}
		}
	]
};
