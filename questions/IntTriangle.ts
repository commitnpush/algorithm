const maxes: number[][] = [];

const setMaxes = (triangle: number[][]) => {
  triangle.forEach((nodes, depth) => {
    nodes.forEach((node, order) => {
      if (!maxes[depth]) maxes[depth] = [];
      if (depth === 0) {
        maxes[0][0] = node;
      } else {
        const leftNode = node + (order === 0 ? 0 : maxes[depth - 1][order - 1]);
        const rightNode =
          node + (order === nodes.length - 1 ? 0 : maxes[depth - 1][order]);
        maxes[depth][order] = Math.max(leftNode, rightNode);
      }
    });
  });
};

const intTriangleSolution = (triangle: number[][]) => {
  setMaxes(triangle);
  return Math.max(...maxes[maxes.length - 1]);
};

console.debug(
  intTriangleSolution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
);

// const getMaxNodes = (triangle: number[][]) => {
//   const depth = triangle.length - 1;
//   return triangle[depth].map((node, index) => )
// }

// const intTriangleSolution = (triangle: number[][]) => {
//   return Math.max(...getMaxNodes(triangle))
// };
