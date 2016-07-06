'use strict'

let gulp = require('gulp');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

// Add a new templates task.
gulp.task('html', function () {
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./css/style.css')
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
    gulp.watch('./templates/*.html', ['html']);
});