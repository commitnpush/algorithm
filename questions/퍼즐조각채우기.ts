// type Graph = {
//     [key: string]: string[]
// }

// const graph: Graph = {
//     A: ["B", "C"],
//     B: ["A", "D"],
//     C: ["A", "G", "H", "I"],
//     D: ["B", "E", "F"],
//     E: ["D"],
//     F: ["D"],
//     G: ["C"],
//     H: ["C"],
//     I: ["C", "J"],
//     J: ["I"]
// };

// const BFS = (graph: Graph, startNode: string): string[] => {
//     const visited: string[] = [];
//     let needVisit: string[] = [];
//     needVisit.push(startNode);
//     while (needVisit.length > 0) {
//         const node = needVisit.shift()!;
//         visited.push(node);
//         needVisit = needVisit.concat(graph[node]).filter(node => !visited.includes(node));
//     }
//     return visited;
// }

// console.debug(BFS(graph, 'A'));

type Board = (0 | 1)[][];
type Graph = Map<string, string[]>;
type Piece = string[];

function makeGraph(board: Board) {
  const result: Graph = new Map();
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      result.set(`${x}${y}`, []);
      // top
      if (board[x][y - 1] !== undefined) {
        result.get(`${x}${y}`)!.push(`${x}${y - 1}`);
      }
      //right
      if (board[x + 1] && board[x + 1][y] !== undefined) {
        result.get(`${x}${y}`)!.push(`${x + 1}${y}`);
      }
      // down
      if (board[x][y + 1] !== undefined) {
        result.get(`${x}${y}`)!.push(`${x}${y + 1}`);
      }
      //left
      //right
      if (board[x - 1] && board[x - 1][y] !== undefined) {
        result.get(`${x}${y}`)!.push(`${x - 1}${y}`);
      }
    }
  }
  return result;
}

function getPieces(graph: Graph, board: Board, target: 0 | 1): Piece[] {
  const result: Piece[] = [];
  const visited: string[] = [];
  let needVisit: string[] = ["00"];
  while (needVisit.length > 0) {
    const node = needVisit.shift()!;
    visited.push(node);
    const adjacents = graph.get(node)!;
    if (board[Number(node[0])][Number(node[1])] === target) {
      const piece = result.find((piece) =>
        piece.some((node) => adjacents.includes(node))
      );
      if (piece) {
        piece.push(node);
      } else {
        result.push([node]);
      }
    }
    needVisit = needVisit
      .concat(adjacents)
      .filter((node) => !visited.includes(node));
  }
  return result;
}

function movePice(piece: Piece) {
  const targetNode = piece.reduce((acc, curr) => {
    return Number(curr[0]) < Number(acc[0]) && Number(curr[1]) < Number(acc[1])
      ? curr
      : acc;
  });
  return piece.map(
    (node) =>
      `${Number(node[0]) - Number(targetNode[0])}${
        Number(node[1]) - Number(targetNode[1])
      }`
  );
}

function putBlock(blockPiece: Piece, holePieces: Piece[]): boolean {
  return false;
}

function solutionOfPuzzle(holeBoard: Board, blockBoard: Board): number {
  let result = 0;
  const holeGraph = makeGraph(holeBoard);
  const holePieces = getPieces(holeGraph, holeBoard, 0);
  const movedHolePices = holePieces.map((piece) => movePice(piece));

  const blockGraph = makeGraph(blockBoard);
  const blockPieces = getPieces(blockGraph, holeBoard, 1);
  const movedBlockPices = blockPieces.map((piece) => movePice(piece));
  console.debug(movedHolePices);
  console.debug(movedBlockPices);
  blockPieces.forEach((blockPiece) => {
    if (putBlock(blockPiece, holePieces)) {
      result += blockPiece.length;
    }
  });

  return result;
}

describe("퍼즐조각채우기", () => {
  test("case1", () => {
    expect(
      solutionOfPuzzle(
        [
          [1, 1, 0, 0, 1, 0],
          [0, 0, 1, 0, 1, 0],
          [0, 1, 1, 0, 0, 1],
          [1, 1, 0, 1, 1, 1],
          [1, 0, 0, 0, 1, 0],
          [0, 1, 1, 1, 0, 0],
        ],
        [
          [1, 0, 0, 1, 1, 0],
          [1, 0, 1, 0, 1, 0],
          [0, 1, 1, 0, 1, 1],
          [0, 0, 1, 0, 0, 0],
          [1, 1, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0],
        ]
      )
    ).toBe(14);
  });
});
