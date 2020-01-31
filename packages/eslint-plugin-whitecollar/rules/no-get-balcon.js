module.exports = {
	meta: {
		docs: {
			description: 'disallow whitecollar getBalcon function',
			category: 'Best Practices',
			recommended: true
		}
	},
	create: function (context) {
		return {
			CallExpression: function (node) {
				if(!!node.callee.object && 
					node.callee.object.name === 'WC' &&
					node.callee.property.name === 'getBalcon') {
					context.report(node, 'WC.getBalcon is disallowed. Please use getContentGroup API');
				}
			}
		};
	}
};
