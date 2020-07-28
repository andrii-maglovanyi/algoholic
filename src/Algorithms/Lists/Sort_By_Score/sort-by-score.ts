const HIGHEST_POSSIBLE_SCORE = 100;

// O(n) time
// O(n) space
const solution = (unsortedScores: number[]) => {
  const sorted = new Array(HIGHEST_POSSIBLE_SCORE).fill(0);

  for (let i = 0; i < unsortedScores.length; i++) {
    sorted[unsortedScores[i]] += 1;
  }

  return sorted.reduceRight((acc, item, index) => {
    if (item > 0) {
      let i = 0;
      while (i < item) {
        acc.push(index);
        i++;
      }
    }

    return acc;
  }, []);
};

export const solutions = {
  Solution: solution,
};
