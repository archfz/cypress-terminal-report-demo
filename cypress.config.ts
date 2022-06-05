import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      installLogsPrinter(on, {
        printLogsToConsole: "always",
        collectTestLogs: () => console.log('a'),
        includeSuccessfulHookLogs: false,
      });
    }
  }
})
