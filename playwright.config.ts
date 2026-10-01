import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir:'./tests',
  workers: 4,
  fullyParallel:true,
  retries:2,
  timeout:60000,
  reporter: 'html',

  use: {
    baseURL: 'https://playwrightlab.github.io/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'off',
    actionTimeout:15000,
    navigationTimeout:300000
},
expect: {
    timeout: 10000
},

  projects:[
    {
      name:'chromium',
      use:{...devices['Desktop Chrome']}
    }
    // ,
    // {
    //   name:'firefox',
    //   use:{...devices['Desktop Firefox']}
    // },
    // {
    //   name:'webkit',
    //   use:{...devices['Desktop Safari']}
    // }
  ]

});