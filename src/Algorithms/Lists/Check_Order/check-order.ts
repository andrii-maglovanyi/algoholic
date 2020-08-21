// O(n) time
// O(1) space
const solution = (
  ordersOne: number[],
  ordersTwo: number[],
  orders: number[]
) => {
  let orderOneIndex = 0;
  let orderTwoIndex = 0;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (ordersOne[orderOneIndex] === order) {
      orderOneIndex++;
      continue;
    }
    if (ordersTwo[orderTwoIndex] === order) {
      orderTwoIndex++;
      continue;
    }

    return false;
  }

  if (
    orderOneIndex !== ordersOne.length ||
    orderTwoIndex !== ordersTwo.length
  ) {
    return false;
  }

  return true;
};

export const solutions = {
  solution,
};
