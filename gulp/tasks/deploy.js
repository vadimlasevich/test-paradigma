import deploySite from "gulp-gh-pages";

export const deploy = () => {
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {}).pipe(deploySite());
};
