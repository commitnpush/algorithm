class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  return findNode(cloned, target);
}

function findNode(node: TreeNode | null, value): TreeNode {
  if (node === null) return null;
  if (node.val === value) return node;
  return findNode(node.left, value) || findNode(node.right, value);
}
