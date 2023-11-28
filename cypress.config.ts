import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // changed path to test folders
    fixturesFolder: "cypress/fixtures",
    specPattern: "cypress/e2e",

    // Time, in milliseconds, to consider a test "slow" during cypress run. A slow test will display in orange text in the default reporter.
    slowTestThreshold: 15000,

    // Time, in milliseconds, to wait until most DOM based commands are considered timed out.
    defaultCommandTimeout: 2000,

    // The quality setting for the video compression, in Constant Rate Factor (CRF).
    // The value can be false to disable compression or a value between 0 and 51,
    // where a lower value results in better quality (at the expense of a higher file size).
    videoCompression: 32,

    // Default height in pixels
    viewportHeight: 1080,

    // Default width in pixels
    viewportWidth: 1920,

    //Setting video to false (it takes time while running a test suite, even if there is no error)
    video: false,

    baseUrl: "http://localhost:5173/",
  },
})
