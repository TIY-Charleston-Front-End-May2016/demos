'use strict'

let gulp = require('gulp');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./css/styles.css')
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./js/*/*.js', ['js']);
    gulp.watch('./css/*.css', ['css']);
    gulp.watch('./index.html', ['html']);
});