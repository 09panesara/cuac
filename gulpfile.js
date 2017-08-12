var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create(); //livereload 
var reload = browserSync.reload;
var sass = require ('gulp-sass');

gulp.task('default', function() {
  // default tasks go here
  // gulp.src('app')
  //   .pipe(webserver({
  //   	host: 'cuac.local',
  //   	port: '9090',
  //     	livereload: true,
  //     	directoryListing: true,
  //     	open: true
  //   }));

});

// watch files for changes and reload
gulp.task('browserSync', function() {
	

  	browserSync.init({
    	server: {
      		baseDir: 'app',
      		host: 'cuac.local'
    	}
  	});

  	gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) // using gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))

});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
})