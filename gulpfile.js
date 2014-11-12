var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('build', function() {
  gulp.src('index.html')
    .pipe(usemin({
      css: [less({compress: true})],
      js: [uglify()]
    }))
    .pipe(gulp.dest('build/'));
});
gulp.task('serve', ['build'], function () {
	connect.server({
		root: 'build',
		livereload: true
	});
});
gulp.task('default', ['build']);