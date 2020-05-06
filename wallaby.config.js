module.exports = function (wallaby) {
  return {
    files: ["src/**/*.ts", "src/**/*.json", "!src/**/*.test.ts"],
    tests: ["src/**/*.test.ts"],

    env: {
      type: "node",
      runner: "node",
    },

    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        module: "commonjs",
      }),
    },

    testFramework: "jest",

    debug: true,
  };
};
