import { defineConfig } from "cypress";

export default defineConfig({
  // baseUrl: 'http://127.0.0.1:5173/',
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



// import { Config } from 'cypress';

// const config: Config = {
//   baseUrl: 'http://localhost:3000',
//   integrationFolder: 'cypress/integration',
//   testFiles: '**/*.spec.js',
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   defaultCommandTimeout: 5000,
//   pageLoadTimeout: 30000,
//   waitForAnimations: true,
//   // ... other configurations
// };

// export default config;