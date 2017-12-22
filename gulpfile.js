var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./app"
  });

  gulp.watch("app/scss/*.scss", ["sass"]);
  gulp.watch("app/*.html", ["html"]);
});

gulp.task("sass", function() {
  return (gulp
      .src("app/scss/*.scss")
      .pipe(plumber())
      .pipe(sass())
      // .pipe(autoprefixer({
      //     browsers: ['last 2 versions'],
      //     cascade: false
      // }))
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream()) );
});

gulp.task("html", function() {
  return gulp.src("app/*.html").pipe(browserSync.stream());
});

gulp.task("prepare", ["sass", "html"]);

gulp.task("default", ["prepare", "serve"]);
