module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/tests/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.tsx?$": "ts-jest", 
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
