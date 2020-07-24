const reverseCharacters = (message: string[], left: number, right: number) => {
  while (left < right) {
    const temp = message[left];
    message[left] = message[right];
    message[right] = temp;

    left++;
    right--;
  }
};

// O(n) time
// O(1) space
const sortWithSplice = (message: string[]) => {
  reverseCharacters(message, 0, message.length - 1);

  let index = 0;
  for (let i = 0; i < message.length; i++) {
    const item = message.splice(i, 1);
    if (item[0] === " ") {
      message.splice(i, 0, item[0]);
      index = i + 1;
    } else {
      message.splice(index, 0, item[0]);
    }
  }

  return message.join("");
};

// O(n) time
// O(1) space
const sortWithReverse = (message: string[]) => {
  reverseCharacters(message, 0, message.length - 1);

  let index = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === " ") {
      reverseCharacters(message, index, i - 1);
      index = i + 1;
    }
  }

  return message.join("");
};

export const solutions = {
  "Sort With Splice": sortWithSplice,
  "Sort With Reverse": sortWithReverse,
};
