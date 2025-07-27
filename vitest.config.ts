import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'vitest.setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/test-utils/**',
        'src/types/**',
        'src/layout/**',
        'src/main.tsx',
        'src/config.ts',
        'src/routes.ts',
        'src/**/*.d.ts',
      ],
      thresholds: {
        statements: 80,
        lines: 50,
        functions: 50,
        branches: 50,
      },
    },
  },
});
