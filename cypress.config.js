const { defineConfig } = require(`cypress`);

module.exports = defineConfig({
  projectId: `m885n4`,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: `create-react-app`,
      bundler: `webpack`,
    },
  },
});
