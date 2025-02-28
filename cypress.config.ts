import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.ts',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        outputRoot: config.projectRoot + '/dist/cypress/apps/wizard-e2e/',
        outputTarget: {
          'wizard-e2e-logs.txt': 'txt',
          'wizard-e2e-logs.json': 'json',
          'wizard-e2e-logs.html': 'html',
        },
      });
    }
  }
})
