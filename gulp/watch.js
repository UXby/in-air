'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

gulp.task('watch', () => {
  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], gulp.series('inject'));

  gulp.watch([
    path.join(conf.paths.src, '/app/styles/*.css'),
    path.join(conf.paths.src, '/app/styles/*.scss')
  ], function (event) {
    if (isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });
});

function isOnlyChange(event) {
  return event.type === 'changed';
}