// O(n) time
// O(1) space
const getMaxProfit = (stockPrices: number[]) => {
  if (stockPrices.length < 2) {
    throw new Error("Getting a profit requires at least 2 prices");
  }

  let leftIndex = 0;
  let rightIndex = 1;

  let maxProfit = stockPrices[rightIndex] - stockPrices[leftIndex];
  let minIndex = leftIndex;
  let maxIndex = rightIndex;

  while (rightIndex < stockPrices.length) {
    if (
      stockPrices[maxIndex] - stockPrices[leftIndex] > maxProfit &&
      leftIndex < maxIndex
    ) {
      minIndex = leftIndex;
      maxProfit = stockPrices[maxIndex] - stockPrices[leftIndex];
    }
    leftIndex++;

    rightIndex++;
    if (
      stockPrices[rightIndex] - stockPrices[minIndex] > maxProfit &&
      rightIndex > minIndex
    ) {
      maxIndex = rightIndex;
      maxProfit = stockPrices[rightIndex] - stockPrices[minIndex];
    }
  }

  return maxProfit;
};

export const solutions = {
  "Get Max Profit": getMaxProfit,
};
