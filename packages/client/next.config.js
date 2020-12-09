const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'article.cdn.content.amplience.net'
    },
    poweredByHeader: false
}