const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
//const del = require("del");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const gcmq = require("gulp-group-css-media-queries");
const less = require("gulp-less");
const smartgrid = require("smart-grid");

const isDev = process.argv.indexOf("--dev") !== -1;
const isProd = !isDev;
const isSync = process.argv.indexOf("--sync") !== -1;

/* function clear() {
  return del("build/*");
} */

function styles() {
  return (
    gulp
      .src("./src/css/styles.less")
      .pipe(gulpif(isDev, sourcemaps.init()))
      .pipe(less())
      //.pipe(concat('style.css'))
      .pipe(gcmq())
      .pipe(
        autoprefixer({
          browsers: ["> 0.1%"],
          cascade: false,
        })
      )
      //.on('error', console.error.bind(console))
      .pipe(
        gulpif(
          isProd,
          cleanCSS({
            level: 2,
          })
        )
      )
      .pipe(gulpif(isDev, sourcemaps.write()))
      .pipe(gulp.dest("./build/css"))
      .pipe(gulpif(isSync, browserSync.stream()))
  );
}

function img() {
  return gulp.src("./src/img/**/*").pipe(gulp.dest("./build/img"));
}

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(gulp.dest("./build"))
    .pipe(gulpif(isSync, browserSync.stream()));
}

function watch() {
  if (isSync) {
    browserSync.init({
      server: {
        baseDir: "./build/",
      },
      online: true,
    });
  }

  gulp.watch("./src/css/**/*.less", styles);
  gulp.watch("./src/**/*.html", html);
}

function grid(done) {
  let settings = {
    columns: 12,
    offset: "30px",
    container: {
      maxWidth: "1250px",
      fields: "30px",
    },
    breakPoints: {
      xl: {
        width: "1100px",
      },
      lg: {
        width: "950px",
      },
      md: {
        width: "850px",
      },
      sm: {
        width: "720px",
        fields: "15px",
      },
      xs: {
        width: "576px",
      },
      xxs: {
        width: "420px",
      },
    },
  };

  smartgrid("./src/css", settings);
  done();
}

let build = gulp.series(gulp.parallel(styles, img, html));

gulp.task("build", build);
gulp.task("watch", gulp.series(build, watch));
gulp.task("grid", grid);
