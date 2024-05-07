import { defineConfig, configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: 'istanbul' // npm i -D @vitest/coverage-istanbul
    },
    setupFiles: ['./vitest-setup.js'],
    environment: "jsdom",
  },
})
