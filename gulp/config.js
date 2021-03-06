var sourceRoot = "./gulp";
var publicRoot = "./public";
var sourceAssets  = sourceRoot;
var publicAssets = publicRoot + "/assets";

module.exports = {
  sass: {
    src: sourceAssets + "/scss/**/*.scss",
    dest: publicAssets + "/css",
    opt: {outputStyle: 'compressed'}
  },
  templates: {
    src: sourceAssets + "/templates/**/*.ejs",
    dest: publicAssets + '/js/',
    outputFile: 'templates.js',
    variable: 'TEMPLATES',
    opt: {}
  },
  uglify: {
    src: [
      sourceAssets + '/js/vendor/jquery-1.12.0.min.js',
      sourceAssets + '/js/vendor/underscore-min.js',
      sourceAssets + '/js/vendor/backbone-min.js',
      sourceAssets + '/js/vendor/backbone.routefilter.min.js',
      sourceAssets + '/js/vendor/jquery.cookie.js',
      sourceAssets + '/js/vendor/jquery-deparam.js',
      sourceAssets + '/js/vendor/pubsub.min.js',
      sourceAssets + '/js/vendor/jquery.j-toker.min.js',
      sourceAssets + '/js/vendor/fuse.min.js',
      sourceAssets + '/js/utilities.js',
      sourceAssets + '/js/components.js',
      sourceAssets + '/js/app.js',
      sourceAssets + '/js/router.js',
      sourceAssets + '/js/models/*.js',
      sourceAssets + '/js/collections/*.js',
      sourceAssets + '/js/views/**/*.js'
    ],
    dest: publicAssets + '/js/',
    outputFile: 'app.js',
    opt: {}
  }
};
