var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create(); //livereload 
var reload = browserSync.reload;
var sass = require('gulp-sass');
//var js = require('gulp-js');
//var vueify = require('vueify');
var fs = require('fs');
var gulpVueify = require('gulp-vueify');
var vueify = require('vueify');
var browserify = require('gulp-browserify');
//var bower = require('gulp-bower');
var config = {bowerDir: './bower_components'}
var fileInclude = require('gulp-file-include');
gulp.task('default', function() {
  // default tasks go here

  gulp.src('./src/*.js')
    .pipe(browserify({ transform: ['vueify', 'babelify', 'aliasify'] }))
    .pipe(gulp.dest('./public'))

});


// watch files for changes and reload
gulp.task('browserSync', function() {
  	browserSync.init({
    	server: {
      		baseDir: 'public',
    	}
  	});

  	//gulp.watch(['/css/**/*.css', 'js/**/*.js'], {cwd: './public'}, reload);
    gulp.watch(['*.html', '/css/**/*.css', 'js/**/*.js'], {cwd: './public'}, reload);
    gulp.watch(['./components/**/*.html'], ['fileInclude']);
});


gulp.task('sass', function(){
	return gulp.src('./assets/scss/**/*.scss')
		.pipe(sass({
      includePaths: ['./bower_components/foundation/scss']
      }).on('error', function(err) {
        console.error(err.message);
        browserSync.notify(err.message, 3000); // Display error in the browser
        this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
    }))

		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.reload({
			stream: true
		}))

});

gulp.task('js', function () {
    gulp.src(['./assets/js/**/*.js'])
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('./assets/js/**/*.js')).on('error', function (err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000); // Display error in the browser
            this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
        })
})


// gulp.task('vueify', function () {
//   return gulp.src('assets/components/**/*.vue')
//     .pipe(vueify())
//     .pipe(gulp.dest('public/js'));
// });


// gulp templating with gulp-file-include
gulp.task('fileInclude', function() {
  gulp.src(['./layouts/**/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});




// gulp watch
gulp.task('watch', ['browserSync', 'sass', 'fileInclude', 'js'], function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('layouts/**/*.html', ['fileInclude']);
  gulp.watch('assets/js/**/*.js', ['js']);

});

gulp.watch('gulpfile.js').on('change', ()=> process.exit(0));