var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function() {
	console.log('Hooray, you created your first Gulp task!!!');
});

gulp.task('html', function() {
	console.log('Imagine something useful bneing done with html...');
});

gulp.task('styles', function() {
	console.log('Imagine something useful bneing done with CSS OR SASS OR POSTCSS...');
});



gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});

