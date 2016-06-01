'use strict';

const gutil = require('gulp-util');
const argv = require('yargs').argv;

exports.isDevelopment = !(argv.prod || argv.production);
exports.paths = {
    initModule: './src/app/side-client/index.module.js',
    src: './src',
    app: './src/app',
    dist: './web',
    tmp: './.tmp'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
    exclude: [/bootstrap.js$/, /bootstrap-sass-official\/.*\.js/, /bootstrap\.css/],
    directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
