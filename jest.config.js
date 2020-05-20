module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@Data_Structures/(.*)": "<rootDir>/src/Data_Structures/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
