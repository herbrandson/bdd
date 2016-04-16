/*eslint-env node */
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const jscs = require('gulp-jscs');
const mainBowerFiles = require('main-bower-files');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const SRC = 'src/**/*.js';
const SASS = 'sass/**/*.scss';
const PUBLIC = 'public/**';
const DEST = 'dist';

gulp.task('default', ['watch', 'main']);
gulp.task('main', ['server', 'public', 'vendor', 'src', 'sass']);
gulp.task('src', ['build', 'lint', 'jscs']);

gulp.task('watch', () => {
	gulp.watch(SRC, ['src']);
	gulp.watch(SASS, ['sass']);
	gulp.watch(PUBLIC, ['public']);
	gulp.watch('./bower_components', ['vendor']);
});

gulp.task('server', () => {
	connect.server({
		root: DEST,
		livereload: true,
	});
});

gulp.task('public', () => {
	return gulp.src(PUBLIC)
		.pipe(handleErrors('public'))
		.pipe(gulp.dest(DEST))
		.pipe(connect.reload());
});

gulp.task('vendor', () => {
	return gulp.src(mainBowerFiles())
		.pipe(handleErrors('vendor'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(DEST))
		.pipe(connect.reload());
});

gulp.task('build', () => {
	return gulp.src(SRC)
		.pipe(handleErrors('build'))
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST))
		.pipe(connect.reload());
});

gulp.task('sass', () => {
	return gulp.src(SASS)
		.pipe(handleErrors('sass'))
		.pipe(sourcemaps.init())
		.pipe(concat('app.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST))
		.pipe(connect.reload());
});

gulp.task('lint', () => {
	return gulp.src(SRC)
		.pipe(handleErrors('lint'))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('jscs', () => {
	return gulp.src(SRC)
		.pipe(handleErrors('jscs'))
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

function handleErrors(source) {
	return plumber({
		errorHandler: notify.onError(source + ': <%= error.message %>'),
	});
}
