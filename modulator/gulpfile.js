var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

// Specify dependencies
// protip: 'default' is...the...default
gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
    // what to do for this task.
});

// Convert SASS into CSS
gulp.task('css', function () {
    gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));

    // what to do for this task.
});

gulp.task('js', function () {
    gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    // files to watch, then what tasks to run when they change
    gulp.watch('./scss/styles.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
})