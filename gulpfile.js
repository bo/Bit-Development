var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css');

gulp.task('images', function () {
    return gulp.src('resources/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/dist/images'));
});

gulp.task('fonts', function () {
    return gulp.src(['resources/fonts/**/*'])
        .pipe(gulp.dest('public/dist/fonts'));
});

gulp.task('sass', function () {
    return sass('./resources/styles/main.scss')
        .pipe(gulp.dest('./public/dist/styles/'))
        .pipe(livereload());
});

gulp.task('scripts', function () {
    return gulp.src(['resources/scripts/**/*'])
        .pipe(gulp.dest('./public/dist/scripts'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('./resources/styles/**/**/*.scss', ['sass']);
    gulp.watch('./resources/scripts/*.js', ['scripts']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'server.js',
        ext: 'js handlebars',
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed(__dirname);
        }, 1000);
    });
});

gulp.task('build', function () {
    return gulp.src('public/dist/styles/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/dist/styles/'));
});

gulp.task('default', [
    'fonts',
    'images',
    'sass',
    'scripts',
    'develop',
    'watch'
]);
