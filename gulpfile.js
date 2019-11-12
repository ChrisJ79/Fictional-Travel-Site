var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();


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

  browserSync.init({
    notify: false,
    // proxy: 'localhost:3000',
    // port: 8080,
    server: {
      baseDir: "app"
    }
  });



  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});


gulp.task('watch', function() {


	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});


gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

