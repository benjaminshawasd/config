'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const minifyCSS    = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const addsrc       = require('gulp-add-src');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const gutil        = require('gulp-util');
const babel        = require('gulp-babel');
const cssnano      = require('gulp-cssnano');

let css = (build) => {

    return gulp
        .src(`sass/fluent-kit.${build}.scss`)
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./css/'));

}

let js = (build, dirs) => {
    
    dirs = dirs.length ? dirs : [];

    const directories = [
        'vendor/perfect-scrollbar-1.3.0.js',
        'modules/popover.js',
        'modules/modal.js',
        'modules/forms/counter.js',
        'modules/forms/input-number.js',
        'modules/forms/input-password.js',
        'modules/init.js',
    ].map(dir => `./js/${dir}`);

    return gulp.src(dirs.concat(directories))
        .pipe(concat(`fluent-kit.${build}.js`))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./js/'));

}

gulp.task('min', () => {

    const styles  = css('min');
    const scripts = js('min', []);

    return [styles, scripts];

});
