// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const sourcemaps = require('gulp-sourcemaps');
// const browserSync = require('browser-sync').create();

// gulp.task('sass', function() {
//   return gulp.src('assets/scss/*.scss') // Path to Sass files
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('assets/css')) // Path to output directory for CSS files
//     .pipe(browserSync.stream());
// });

// gulp.task('serve', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     open: true // This option will automatically open the browser for you
//   });

//   gulp.watch('assets/scss/*.scss', gulp.series('sass')); // Path to Sass files
//   gulp.watch('*.html').on('change', browserSync.reload); // Path to HTML files
// });

// gulp.task('default', gulp.series('serve'));




const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('build', gulp.series('sass'));

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('build', 'watch'));
