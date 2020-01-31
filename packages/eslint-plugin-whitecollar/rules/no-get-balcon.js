module.exports = {
	meta: {
        docs: {
            description: "disallow whitecollar getBalcon function",
            category: "Best Practices",
            recommended: true
		},
		
    },
    create: function (context) {
		return {
			CallExpression: function(node) {
				var callee = node.callee;
				if(!!callee.object && 
					callee.object.name === "WC" &&
					callee.property.name === "getBalcon") {
					context.report(node, "WC.getBalcon is disallowed. Please use getContentGroup API");
				}
			}
		}
	}
};