const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// optimize images
gulp.task('imageMin', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// minify JS
gulp.task('minify', function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// compile sass
gulp.task('sass', function(){
    gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['imageMin', 'minify', 'sass']);

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['minify']);
    gulp.watch('img/*', ['imageMin']);
    gulp.watch('scss/*.scss', ['sass']);
});