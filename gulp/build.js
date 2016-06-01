'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const git = require('gulp-git');
const gulpif = require('gulp-if');
const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('html', () => {

    return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
        .pipe($.useref())
        .pipe(gulpif('*.js', $.rev()))
        .pipe(gulpif('*.css', $.replace('../../bower_components/bootstrap-sass-official/assets/fonts/bootstrap/', '../fonts/')))
        .pipe(gulpif('*.css', $.csso()))
        .pipe(gulpif('*.css', $.rev()))
        .pipe($.revReplace())
        .pipe(gulpif('*.html', $.minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
            conditionals: true
        })))
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe($.size({title: path.join(conf.paths.dist, '/'), showFiles: true}));
});

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', () => {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('other', () => {
    let fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    return gulp.src([
            path.join(conf.paths.src, '/**/*'),
            path.join('!' + conf.paths.app, '/**/*.*'),
            path.join('!' + conf.paths.src, '/**/*.{html,css,scss,ts}')
        ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', (done) => {
    $.del([conf.paths.tmp, conf.paths.dist], {force: true}, done);
});

gulp.task('build',
    gulp.series(
        'clean',
        gulp.parallel('scripts', 'styles'),
        'inject',
        gulp.parallel('html', 'fonts', 'other')
    )
);
