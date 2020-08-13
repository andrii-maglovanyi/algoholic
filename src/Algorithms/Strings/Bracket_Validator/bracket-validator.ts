// O(n) time
// O(n) space in worst case
const solution = (str: string) => {
  const openers = ["(", "{", "["];
  const closers = [")", "}", "]"];

  const foundOpeners = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openers.includes(char)) {
      foundOpeners.push(char);
    } else {
      const closerIndex = closers.indexOf(char);

      if (~closerIndex !== 0) {
        const correspondingOpener = openers[closerIndex];

        if (foundOpeners.pop() !== correspondingOpener) {
          return false;
        }
      }
    }
  }

  if (foundOpeners.length) {
    return false;
  }

  return true;
};

export const solutions = {
  solution,
};
