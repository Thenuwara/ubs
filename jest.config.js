module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["../node_modules/@testing-library/jest-dom/dist/index.js", "../jest.setup.js"],
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  testEnvironment: "jsdom",
};
