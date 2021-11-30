const sass = require("gulp-sass")(require("sass"));
const { src, dest, watch } = require("gulp");
const Fiber = require("fibers");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function css() {
  return src("./assets/scss/main.scss")
    .pipe(
      sass({
        includePaths: ["./node_modules"],
        fiber: Fiber,
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css/"));
}
function createVariables() {
  return src("./assets/scss/tokens/exported-properties.scss")
    .pipe(
      sass({
        includePaths: ["./node_modules"],
        fiber: Fiber,
      }).on("error", sass.logError)
    )
    .pipe(dest("./docs/docs/.vitepress/theme/"));
}

function watcher(cb) {
  watch("assets/scss/**/*.{scss,sass}", css, cb);
}

exports.css = css;
exports.watcher = watcher;
exports.createVariables = createVariables;
