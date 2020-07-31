export const TestSolutions = (solutions: any, fn: any) => {
  Object.keys(solutions).forEach((name) => {
    it(name, () => {
      fn(solutions[name]);
    });
  });
};
