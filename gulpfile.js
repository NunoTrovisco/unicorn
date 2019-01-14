var gulp = require('gulp');
var sass = require('gulp-sass');
var pump = require('pump');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var deploy = require('gulp-gh-pages');
var copy = require('gulp-copy');
var config = require('./config/config.json');

sass.compiler = require('node-sass');

gulp.task("uglify", function () {
    return gulp.src(["./app/js/gmap.js", "./app/js/main.js", "./app/js/terminal.js"])
        .pipe(concat("bundle.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("./app/lib/"));
});

gulp.task('clean', function () {
    return gulp.src(['./app/lib', '.app/css'], {read: false, allowEmpty: true}).pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/js/*.js', gulp.series('uglify'));
    gulp.watch('./app/scss/*.scss', gulp.series('sass'));
});


gulp.task("default", gulp.series(['clean', 'sass', 'uglify']), function () {

});

gulp.task('deploy', function () {
    return gulp.src("./app/**/*")
        .pipe(deploy())
});
