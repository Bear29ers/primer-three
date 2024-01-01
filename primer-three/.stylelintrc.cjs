/** @types {import('stylelint').Configuration} */

const config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['/node_modules'],
  rules: {
    'no-empty-source': null,
  },
};

module.exports = config;
