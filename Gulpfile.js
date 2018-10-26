var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    merge = require('merge-stream'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglifyjs'),
    reload = browserSync.reaload,
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

// Internal config, folder structure
var paths = {
    style: {
        source: 'app/sass/',
        destination: 'dist/css/',
    },
    script: {
        source: 'app/js/**/*.js',
        destination: 'dist/js/',
    }
};

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    var files = [
        './style.css',
        './*.php'
    ];

    browserSync.init(files, {
        proxy: "http://localhost/josefin_eklund",
        notify: false
    });
});

gulp.task('images', function(){
    gulp.src('app/img/**/*')
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/img/'));
});

gulp.task('js', function() {
    gulp.src(paths.script.source)
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(uglify('jose2.min.js'))
      .pipe(gulp.dest(paths.script.destination))
      .pipe(browserSync.reload({
        stream: true
      }));
});

try {
    gulp.task('sass', function() {
        return gulp
          .src(paths.style.source + 'style.scss')
          .pipe(plumber())
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer())
          .pipe(sourcemaps.write())
          .pipe(cssmin())
          .pipe(gulp.dest(paths.style.destination))
          .pipe(browserSync.reload({
              stream: true
          }));
    });
} catch(e) {
    console.log("ERROR:", e.stack);
}

gulp.task('default', ['sass', 'js', 'images', 'browser-sync'], function(){
    gulp.watch(paths.style.source + '**/*.scss', ['sass']);
    gulp.watch(paths.script.source, ['js']);
    gulp.watch('**/*.php', browserSync.reload);
});
