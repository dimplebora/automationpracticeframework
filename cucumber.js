module.exports = {
  default: {
    require: [
      'support/**/*.js',
      'step-definitions/**/*.js'
    ],
    paths: [
      'features/*.feature'
    ],
    format: [
      'progress',
      'json:myreports/cucumber-report.json'
    ]
  }
}