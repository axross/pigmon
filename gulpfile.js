const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');
const rename = require('gulp-rename');

gulp.task('bundle:css', () => {
  gulp.src('./src/bootstrap.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer({ browsers: ['iOS >= 8', 'Android >= 4.0'] }),
      csswring,
    ]))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./ghost/content/themes/pigmon/assets'));
});

gulp.task('move:templates', () => {
  gulp.src(['./src/*.hbs', './src/package.json'])
    .pipe(gulp.dest('./ghost/content/themes/pigmon'));
});
