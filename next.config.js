/**
 * Created by pdd on 2018/6/8.
 */

// next.config.js
const withSass = require('@zeit/next-sass');
// const withCss = require('@zeit/next-css');
const withImages = require('next-images')
// module.exports = withSass({
//     cssModules: true
// })


// module.exports = withImages({
//     webpack(config, options) {
//         return config
//     }
// });

module.exports = (withSass(withImages()));