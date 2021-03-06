var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});