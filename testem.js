/*jshint node:true*/
module.exports = {
  "framework": "mocha",
  "test_page": "tests/index.html",
  "disable_watching": true,
  "reporter":"dot",
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
