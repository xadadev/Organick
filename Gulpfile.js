const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/scss/*.scss') // Path to Sass files
    .pipe(sass())
    .pipe(gulp.dest('assets/scss')) // Path to output directory for CSS files
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './' // Path to website root directory
    }
  });

  gulp.watch('assets/scss/*.scss', gulp.series('sass')); // Path to Sass files
  gulp.watch('*.html').on('change', browserSync.reload); // Path to HTML files
});

gulp.task('default', gulp.series('serve'));
