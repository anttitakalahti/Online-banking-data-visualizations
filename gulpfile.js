var gulp = require('gulp');

var del   = require('del');
var sass  = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('clean', function(callback) {
	del(['css'], callback)
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['clean'], function() {
	gulp.start('sass', 'watch');
});
