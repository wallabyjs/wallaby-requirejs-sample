// delaying wallaby automatic start
wallaby.delayStart();

requirejs.config({
  baseUrl: '/src',

  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore'
  },

  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

require(wallaby.tests, function () {
  wallaby.start();
});
