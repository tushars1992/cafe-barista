module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        outputPath: 'tests/report/test_report.html',
      },
    ],
  ],
};
