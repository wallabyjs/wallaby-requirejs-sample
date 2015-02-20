module.exports = function () {
  return {
    files: [
      {pattern: 'lib/require.js', instrument: false},
      {pattern: 'lib/*.js', instrument: false, load: false},
      {pattern: 'src/app.js', load: false},
      {pattern: 'test/test-main.js', instrument: false}
    ],

    tests: [
      {pattern: 'test/appSpec.js', load: false}
    ]
  };
};