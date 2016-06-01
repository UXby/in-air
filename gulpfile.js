'use strict';

const gulp = require('gulp');
const conf = require('./gulp/conf.js');

require('./gulp/scripts.js');
require('./gulp/inject.js');
require('./gulp/styles.js');
require('./gulp/build.js');
require('./gulp/server.js');

conf.isDevelopment ? gulp.task('default', gulp.series('serve')) : gulp.task('default', gulp.series('build'));