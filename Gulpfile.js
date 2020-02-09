'use strict'
/* global require */

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    imagemin        = require('gulp-imagemin'),
    cache           = require('gulp-cache'),
    babel           = require('gulp-babel'),
    newer           = require('gulp-newer');

var paths = {
    style: {
        src: 'app/sass/',
        output: 'dist/',
    },
    script: {
        src: 'app/js/**/*.js',
        output: 'dist/',
    },
    img: {
        src: 'app/img/**/*',
        output: 'dist/img/',
    }
};

gulp.task('CSS', () => {
    return gulp.src(paths.style.src + 'style.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.style.output))
});

gulp.task('JS', () => {
    return gulp.src(paths.script.src)
        .pipe(newer(paths.script.output))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.script.output))
        .on('error', error => {
            console.error('' + error);
        })
});

gulp.task('IMAGES', () => {
    gulp.src(paths.img.src)
        .pipe(newer(paths.img.output))
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(paths.img.output));
});

gulp.task('WATCH', () => {
    gulp.watch(paths.style.src + '**/*.scss', ['CSS']);
    gulp.watch(paths.script.src, ['JS']);
});

gulp.task('default', ['CSS', 'JS', 'IMAGES', 'WATCH']);
