Package.describe({
  name: 'mikkelking:pixedelic-slideshow',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package to wrap pixedelic/Camera',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mikkelking/pixedelic-slideshow.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
// Camera files
  api.addFiles('lib/camera.js','client');
  api.addFiles('lib/jquery.easing.1.3.js','client');
// This one is not mandatory if only on desktop
  api.addFiles('lib/jquery.mobile.customized.min.js','client');
// CSS and images files
  api.addFiles('lib/camera.css','client');
  api.addFiles('images/camera-loader.gif','client');
  api.addFiles('images/camera_skins.png','client');
  api.addFiles('images/blank.gif','client');
// The wrapper itself
  api.addFiles('pixedelic-slideshow.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('mikkelking:pixedelic-slideshow');
  api.addFiles('test.html','client');
  api.addFiles('tests.js');
}); 
