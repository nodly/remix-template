module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts)?(x)'],
  transform: {
    '^.+\\.js$': ['esbuild-jest'],
    '^.+\\.tsx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        loaders: {
          '.test.ts': 'tsx',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
};
