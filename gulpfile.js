var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var sass = require('gulp-sass');
var pump = require('pump');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task("uglify", function () {
    return gulp.src("./app/js/*.js")
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

// gulp.task('deploy', function() {
//     return gulp.src('./dist/**/*')
//         .pipe(ghPages());
// });

// copy all the necessary files to prod directory
gulp.task('copy', function() {
    var sourceFiles = [
        'config/*',
        'app/index.html',
        'app/js/*',
        'app/lib/*',
        'app/css/*',
        'app/assets/**',
        'package.json']
    var destination = 'prod/'

    return gulp.src(sourceFiles)
        .pipe(copy(destination))
})

// push the codes to the Master branch on GitHub
gulp.task('deploy', ['copy'], function () {
    return gulp.src("./prod/**/*")
        .pipe(deploy({
            remoteUrl: config.gitRepositoryUrl,
            branch: config.gitDeployBranch
        }))
})