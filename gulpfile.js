var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify  = require('gulp-uglifyjs');

    gulp.task('scripts', function() {
    return gulp.src([
        'js/main.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});
    gulp.task('css-libs', function() {
    return gulp.src([
        'css/style.css'
        ])
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
    });
