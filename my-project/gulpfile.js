'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const gulppug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const newer = require('gulp-newer');
const del = require('del');

//Пути исходных файлов dist и файлам назначения build
const paths = {
    pug: {
        src: 'dist/pug/*.pug',
        dest: 'build/'
    },
    html: {
        src: 'dist/pages/*.html',
        dest: 'build/'
    },
    scss: {
        src: ['dist/scss/pages/*.sass', 'dist/scss/pages/*.scss'],
        dest: 'build/css/'
    },
    scripts: {
        src: 'dist/scripts/**/*.js',
        dest: 'build/js/'
    },
    images: {
        src: 'dist/img/**',
        dest: 'build/img/'
    }
}

//Очистка каталога, крооме изображений
function clean() {
    return del(['build/*', '!build/img'])
}

//Оброботка pug
function pug() {
    console.log('Компиляция Pug');
    return gulp.src(paths.pug.src)
        .pipe(size({ title: 'До сжатия' }))
        .pipe(gulppug())
        .pipe(size({ title: 'После сжатия' }))
        .pipe(gulp.dest(paths.pug.dest));
}

//Оброботка html
function html() {
    console.log('Компиляция HTML');
    return gulp.src(paths.html.src)
        .pipe(size({ title: 'До сжатия' }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({ title: 'После сжатия' }))
        .pipe(gulp.dest(paths.html.dest));
}

//Оброботка стилей
function scss() {
    console.log('Компиляция SCSS');
    return gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(
            gulp.dest(paths.scss.dest)
        )
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write(`./`))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.scss.dest));
}

//Оброботка Java Script
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write(`./`))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

// Сжатие изображений
function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.images.dest));
}


// Отслеживание изменений в файлах
async function watch() {
    gulp.watch(paths.pug.src, pug);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.scss.src, scss);
    gulp.watch(paths.scripts.src, scripts);
}

// Таск, который выполняется по команде gulp
const build = gulp.series(clean, img, html, gulp.parallel(scripts, scss, watch));


// Таски для ручного запуска с помощью gulp clean, gulp html и т.д.
exports.clean = clean;
exports.img = img;
exports.pug = pug;
exports.html = html;
exports.scss = scss;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;