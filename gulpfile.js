var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssImport = require('postcss-import');


gulp.task('default', function() {
	console.log('Hooray, you created your first Gulp task!!!');
});

gulp.task('html', function() {
	console.log('Imagine something useful bneing done with html...');
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssNested, cssVars, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));

});



gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});

