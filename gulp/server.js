'use strict';
const gulp = require('gulp');
const conf = require('./conf');
const browserSync = require('browser-sync');
const browserSyncSpa = require('browser-sync-spa');
const util = require('util');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  let routes = null;

  if (baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  let server = {
    baseDir: baseDir,
    routes: routes
  };

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });

  browserSync.watch(conf.paths.tmp + '/serve/**/*.*').on('change', browserSync.reload);

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'
  }));
}

function watch() {
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
}

function serve() {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src]);
}

gulp.task('serve',
    gulp.series(
        'clean',
        gulp.parallel('scripts', 'styles'),
        'inject',
        gulp.parallel(serve, watch)
    )
);