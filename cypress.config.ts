import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.ts',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on) {
      installLogsPrinter(on, {
        printLogsToConsole: "always",
      });
    }
  }
})
