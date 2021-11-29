const sass = require("gulp-sass")(require("sass"));
const { src, dest, watch } = require("gulp");
const Fiber = require("fibers");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function css() {
  return src("./assets/scss/**/*.{scss,sass}")
    .pipe(
      sass({
        includePaths: ["./node_modules"],
        fiber: Fiber,
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css"));
}

function watcher(cb) {
  watch("assets/scss/**/*.{scss,sass}", css, cb);
}

exports.css = css;
exports.watcher = watcher;
