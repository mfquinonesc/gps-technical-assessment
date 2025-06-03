const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const build = () =>{
    return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

const watchTask = () =>{
    watch(['index.scss','partials/*.scss'],build);
}

exports.default = series(build,watchTask);