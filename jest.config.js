/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};
