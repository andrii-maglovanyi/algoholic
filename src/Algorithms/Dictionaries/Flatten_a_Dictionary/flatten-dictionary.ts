type Dict = { [key: string]: any };
type FlatDict = { [key: string]: string };

// O(n) time.
// We visit every key in dictionary only once, hence the linear time complexity.
// O(n) space.
// Since the output dictionary is asymptotically as big as the input dictionary. We also store recursive calls in the execution stack which in the worst case scenario could be O(N), as well. The total is still O(N).
const flattenRecursive = (dict: Dict) => {
  const helper = (dict: Dict, path: string[], flatDict: FlatDict) => {
    for (let prop in dict) {
      const newPath = prop ? [...path, prop] : path;

      if (typeof dict[prop] === "object") {
        helper(dict[prop], newPath, flatDict);
      } else {
        flatDict[newPath.join(".")] = dict[prop];
      }
    }

    return flatDict;
  };

  return helper(dict, [], {});
};

export const solutions = {
  "Flatten Recursive": flattenRecursive,
};
