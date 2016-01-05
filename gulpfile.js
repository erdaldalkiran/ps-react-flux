'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //open a URL in a web browser

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    absoluteUrl: function () {
        return this.devBaseUrl + ':' + this.port + '/';
    },
    paths: {
        html: './src/**/*.html',
        dist: './dist'
    }
};

//Start a local dev server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.absoluteUrl() }));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default',['html','open', 'watch']);