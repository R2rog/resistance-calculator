//const gulp = require('gulp');
import gulp from 'gulp';
//const imagemin = require('gulp-imagemin');
import imagemin from 'gulp-imagemin';
//const concat = require('gulp-concat');
import concat from 'gulp-concat';
//const terser = require('gulp-terser');
import terser from 'gulp-terser';
//const sourcemap = require('gulp-sourcemaps');
import sourcemap  from 'gulp-sourcemaps';
//const {src, series, parallel, dest, watch} = require('gulp');
import pkg from 'gulp';
const {src, series, parallel, dest, watch} = pkg;
//const autoprefixer = require('autoprefixer');
import autoprefixer from 'autoprefixer';
//const cssnano = require('cssnano');
import cleanCSS from 'gulp-clean-css';

import cssnano from 'cssnano';
import postcss  from 'gulp-postcss';

const jsPath = 'src/components/*.js';
const cssPath = 'src/style.css';

function copyHTML(){
    return src('src/views/*').pipe(gulp.dest('dist/views'));
}

function imgOpt(){
    return src('assets/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
};

/*function jsTask(){
    return src(jsPath)
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(dest('dist/js'));
};*/
function copyComponents(){
    return src('src/components/*').pipe(gulp.dest('dist/components'));
};

function cssTask(){
    return src(cssPath)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/style'));
}

/*function cssTask(){
    return src(cssPath)
    .pipe(sourcemap.init())
    .pipe(concat('style.js'))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemap.write('.'))
    .pipe(dest('dist/style'));
};*/

function watchTask(){
    watch([cssPath,jsPath],{interval:1000},parallel(cssTask,copyComponents));
}
const build = series(parallel(copyHTML, imgOpt, copyComponents,cssTask));
//exports.default = series(parallel(copyHTML, imgOpt, gifOpt,jsTask,cssTask).watchTask);
export default build;