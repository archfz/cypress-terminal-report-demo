import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        printLogsToConsole: 'always',
        printLogsToFile: 'always',
        outputRoot: config.projectRoot + '/cypress/logs/',
        logToFilesOnAfterRun: true,

        outputTarget: {
          'consoleLogs.txt': 'txt',
        },
      });
    }
  }
})
