// O(n) time
// O(1) space
const solution = (outbound: number[], inbound: number[]) => {
  let cheapestOutboundIndex = outbound.length - 1;
  let currentOutboundIndex = cheapestOutboundIndex;
  let cheapestInboundIndex = inbound.length - 1;
  let currentInboundIndex = cheapestInboundIndex;

  let cheapestSoFar =
    outbound[cheapestInboundIndex] + inbound[cheapestInboundIndex];

  while (currentOutboundIndex >= 0) {
    currentInboundIndex--;
    currentOutboundIndex--;

    if (inbound[currentInboundIndex] <= inbound[cheapestInboundIndex]) {
      cheapestInboundIndex = currentInboundIndex;
    }

    if (
      outbound[currentOutboundIndex] + inbound[cheapestInboundIndex] <=
      cheapestSoFar
    ) {
      cheapestOutboundIndex = currentOutboundIndex;
      cheapestSoFar =
        outbound[cheapestOutboundIndex] + inbound[cheapestInboundIndex];
    }
  }

  return [cheapestOutboundIndex, cheapestInboundIndex];
};

export const solutions = {
  solution,
};
