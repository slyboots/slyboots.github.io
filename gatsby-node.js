
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.pluginCreatorId === 'Plugin component-page-creator') {
        createNodeField({
            node,
            name: `pageType`,
            value: "userPage",
        });
        createNodeField({
            node,
            name: `pageName`,
            value: node.path.replace(/\W+/g, ' ').replace(/^\s+|\s+$/g, ''),
        })
    }
}
