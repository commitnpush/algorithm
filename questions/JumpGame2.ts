// function jump(nums: number[]): number {
//   let numberOfJumps = 0;
//   let currentIndex = 0;
//   const lastIndex = nums.length - 1;
//   while (currentIndex < lastIndex) {
//     const currentValue = nums[currentIndex];
//     numberOfJumps++;
//     if (currentIndex + currentValue >= lastIndex) break;
//     const candidates = nums.slice(
//       currentIndex + 1,
//       currentIndex + currentValue + 1
//     );
//     currentIndex += getBestIndex(candidates) + 1;
//   }
//   return numberOfJumps;
// }

// function getBestIndex(candidates: number[]): number {
//   const { bestIndex } = candidates.reduce(
//     ({ bestValue, bestIndex }, currentValue, index) => {
//       if (currentValue + index >= bestValue) {
//         return { bestValue: currentValue + index, bestIndex: index };
//       }
//       return { bestValue, bestIndex };
//     },
//     {
//       bestValue: Number.NEGATIVE_INFINITY,
//       bestIndex: -1,
//     }
//   );

//   return bestIndex;
// }

function jump(nums: number[]): number {
  let Jumps = 0;
  let currentJump = 0;
  let maxJump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxJump = Math.max(maxJump, i + nums[i]);

    if (i == currentJump) {
      Jumps++;
      currentJump = maxJump;
    }
  }
  return Jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
