var gulp = require("gulp"),
    sass = require("gulp-sass"),
        autoprefixer = require('gulp-autoprefixer'),
            gcmq = require('gulp-group-css-media-queries');
	
gulp.task('sass', function() {
  return gulp.src('scss/app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app/'));
});
gulp.task('autoprefixer', function(){
    gulp.src('app/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));
});
gulp.task('gcmq', ['sass','autoprefixer'], function () {
   gulp.src('app/css/style.css')
     .pipe(gcmq())
	 .pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function() { // run this
  gulp.watch('scss/app/**/*.scss', ['gcmq']);
});