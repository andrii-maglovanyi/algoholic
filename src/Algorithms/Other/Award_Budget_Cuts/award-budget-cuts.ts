// O(nlog(n)) time
// O(n) space
export const budgetCutsIterative = (
  grantsArray: number[],
  newBudget: number
) => {
  let underBudgetSum = 0;
  let cap = newBudget / grantsArray.length;
  const underBudget: number[] = [];
  const overBudget: number[] = [...grantsArray];

  do {
    for (let i = overBudget.length - 1; i >= 0; i--) {
      const grant = overBudget.splice(i, 1)[0];
      if (grant < cap) {
        underBudgetSum += grant;
        underBudget.push(grant);
      } else {
        overBudget.push(grant);
      }
    }

    cap = (newBudget - underBudgetSum) / overBudget.length;
  } while (overBudget.find((grant) => grant < cap));

  return cap;
};

// O(n⋅log(n)) time.
// Sorting the grants array takes O(N⋅log(N)), calculating the surplus is O(N) due to the grants summation, and finally the for loop takes another O(N). In total, the time complexity is O(N⋅log(N)) before sorting and O(N) after sorting.
// O(1) space
// Throughout the algorithm we used only a constant amount of auxiliary space. The space complexity is therefore O(1).
const findGrantsCap = (grantsArray: number[], newBudget: number) => {
  // Sort the array in a descending order
  grantsArray.sort((a, b) => b - a);

  // Pad the array with a zero at the end to cover the case where 0 <= cap <= grantsArray[i]
  grantsArray.push(0);

  // Calculate the total amount we need to cut back to meet the reduced budget
  let surplus = grantsArray.reduce((sum, grant) => sum + grant) - newBudget;

  // If there is nothing to cut, simply return the highest grant as the cap. Recall that the grants array is sorted in a descending  order, so the highest grant is positioned at index 0
  if (surplus <= 0) {
    return grantsArray[0];
  }

  // Start subtracting from surplus the differences (“deltas”) between consecutive grants until surplus is less or equal to zero. Basically, we are testing out, in order, each of the grants as potential lower bound for the cap.
  let i = 0;
  while (surplus > 0) {
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1]);
    i++;
  }

  // Since grantsArray[i] is a lower bound to our cap, i.e. grantsArray[i] <= cap, we  need to add to grantsArray[i] the difference: (-total / i), so the returned value equals exactly to cap.
  return grantsArray[i] + -surplus / i;
};

export const solutions = {
  "Award Budget Cuts Iterative": budgetCutsIterative,
  "Find Grants Cap": findGrantsCap,
};
