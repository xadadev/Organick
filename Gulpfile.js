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
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/scss/*.scss') // Path to Sass files
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css')) // Path to output directory for CSS files
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: true // This option will automatically open the browser for you
  });

  gulp.watch('assets/scss/*.scss', gulp.series('sass')); // Path to Sass files
  gulp.watch('*.html').on('change', browserSync.reload); // Path to HTML files
});

gulp.task('build', gulp.series('sass')); // Build task

gulp.task('default', gulp.series('serve'));
