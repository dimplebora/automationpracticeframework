module.exports = {
  default: {
    require: [
      'support/**/*.js',
      'step-definitions/**/*.js'
    ],
    paths: [
      'features/*.feature'
    ]
  }
}