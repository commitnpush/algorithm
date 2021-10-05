const stepCostTable = {};

const climbingStairs = (costs: number[]) => {
  if (stepCostTable[costs.length]) return stepCostTable[costs.length];
  if (costs.length === 1) return costs[0];
  if (costs.length === 2) return Math.min(costs[0], costs[1]);
  if (costs.length === 3) return Math.min(costs[0] + costs[2], costs[1]);
  const total = Math.min(
    climbingStairs(costs.slice(0, costs.length - 3)) + costs[costs.length - 2],
    climbingStairs(costs.slice(0, costs.length - 2)) + costs[costs.length - 1]
  );
  return (stepCostTable[costs.length] = total);
};

console.debug(climbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
