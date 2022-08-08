import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        outputRoot: config.projectRoot + "/logs/",
        specRoot: "cypress/e2e",
        outputTarget: {
          "cypress-logs|json": "json",
        },
        printLogsToFile: "always",
        printLogsToConsole: "onFail",
        includeSuccessfulHookLogs: false,
      });
    }
  }
})
