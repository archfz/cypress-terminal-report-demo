import {defineConfig} from "cypress";
import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";
import * as fs from "fs";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/e2e-output.[hash].xml',
    toConsole: true,
  },
  requestTimeout: 15000,
  defaultCommandTimeout: 15000,
  e2e: {
    specPattern: 'cypress/integration/**/*.ts',
    testIsolation: false,
    supportFile: "cypress/support/e2e.ts",

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args = launchOptions.args.map((arg) => {
            if (arg === '--headless') {
              return '--headless=new'
            }

            return arg
          })
        }

        return launchOptions
      })

      on(
        'after:spec',
        (_spec, results) => {
          if (results && results.video) {
            // Do we have failures for any retry attempts?
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            )
            if (!failures) {
              // delete the video if the spec passed and no tests retried
              fs.unlinkSync(results.video)
            }
          }
        }
      )

      return installLogsPrinter(on, {
        printLogsToFile: 'always',
        printLogsToConsole: 'never',
        outputRoot: config.projectRoot + '/cypress/logs/',
        specRoot: 'cypress/integration',
        outputTarget: {
          '.|txt': 'txt',
        }
      });
    },
    video: true,
    videoCompression: true,
    // baseUrl: 'https://localhost:32805',
  },
})
