Package.describe({
  name: 'sunstory:meteor-imagesloaded',
  summary: 'imagesLoaded v3.2.0 packaged for Meteor.',
  version: '1.0.1',
  git: 'https://github.com/sunstorymvp/meteor-imagesloaded.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('jquery', 'client');
  api.addFiles('imagesloaded.js', 'client');
});
