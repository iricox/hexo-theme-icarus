/**
 * Category list page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('nav.md', function (locals) {
        return {
            path: 'categories/',
            layout: ['nav.md'],
            data: Object.assign({}, locals, {
                __categories: true
            })
        };
    });
}