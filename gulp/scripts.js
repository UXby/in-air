'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const webpackStream = require('webpack-stream');
const plumber = require("gulp-plumber");
const $ = require('gulp-load-plugins')();

function webpack(watch, callback) {
    let firstBuildReady = false;

    let webpackOptions = {
        watch: watch,
        preLoaders: [],
        plugins: [
            require('webpack-fail-plugin')
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015'],
                        plugins: ["transform-decorators-legacy", "transform-class-properties"]
                    }
                },
                {
                    test: /\.html$/,
                    loader: `raw?minimize=${!watch}`
                },
                {
                    test: /\.scss/,
                    loader: 'raw!sass-loader'
                }
            ]
        },
        output: {filename: 'index.module.js'}
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
        webpackOptions.preLoaders.push({test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'});
    }

    let webpackChangeHandler = (err, stats) => {
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));

        firstBuildReady = true;
    };

    return gulp.src(conf.paths.initModule)
        .pipe($.plumber({errorHandler: conf.errorHandler('webpack-stream')}))
        .pipe(webpackStream(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/js')))
        .on('data', () => {
            if (firstBuildReady && callback) callback()
        });
}

function compile(callback) {
    return webpack(false, callback);
}

function watch(callback) {
    return webpack(true, callback);
}

gulp.task('scripts', compile);

exports.scriptsWatch = watch;