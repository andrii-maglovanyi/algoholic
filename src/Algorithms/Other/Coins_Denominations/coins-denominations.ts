const get = (amountLeft: number, denominations: number[]) => {
  const combinations: number[][] = [];
  function changePossibilitiesTopDown(
    amountLeft: number,
    denominations: number[],
    currentIndex = 0,
    combination: number[] = []
  ) {
    combination; //?
    const currentCoin = denominations[currentIndex];
    denominations; //?
    currentIndex; //?
    currentCoin; //?
    // Base cases:
    // We hit the amount spot on. yes!
    if (amountLeft === 0) {
      return combination;
    }

    // We overshot the amount left (used too many coins)
    if (amountLeft < 0 || currentIndex === denominations.length) {
      return false;
    }

    while (amountLeft >= 0) {
      const res = changePossibilitiesTopDown(
        amountLeft,
        denominations,
        currentIndex + 1,
        combination
      );
      res; //?
      if (res) {
        combinations.push(res);
      }
      amountLeft -= currentCoin;
      combination.push(currentCoin);
    }

    return combination;
  }

  changePossibilitiesTopDown(amountLeft, denominations);
  combinations; //?
  return combinations;
};

export const solutions = {
  "Coins Denominations": get,
};
