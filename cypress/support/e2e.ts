// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import registerCypressLogCollector, {
  SupportOptions,
} from "cypress-terminal-report/src/installLogsCollector";

const options: SupportOptions = {
  collectTypes:['cons:error', 'cons:warn', 'cons:log','cons:info'],
  enableContinuousLogging: false,
  enableExtendedCollector: false,
  debug: false,
}
registerCypressLogCollector(options);
// Alternatively you can use CommonJS syntax:
// require('./commands')
