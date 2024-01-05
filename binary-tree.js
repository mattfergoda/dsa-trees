"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let depth = 1;

    let toVisitQueue = [this];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (!current.left || !current.right)
        return depth;

      depth++;
      toVisitQueue.push(this.left);
      toVisitQueue.push(this.right);
    }
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let leftMaxDepth = this.left ? this.left.maxDepth() : 0;
    let rightMaxDepth = this.right ? this.right.maxDepth() : 0;

    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  }


  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {
    debugger;
    if (!this.left && !this.right) return 1;

    let leftMinDepth = this.left ? this.left.minDepth() : Infinity;
    let rightMinDepth = this.right ? this.right.minDepth() : Infinity;

    return Math.min(leftMinDepth, rightMinDepth) + 1;
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const upperBound = Infinity;

    function _nextLarger(node, lowerBound, upperBound) {
      if (node === null) return upperBound;
      if (node.val > lowerBound && node.val < upperBound) {
        upperBound = node.val;
      }

      return Math.min(
        _nextLarger(node.left, lowerBound, upperBound), 
        _nextLarger(node.right, lowerBound, upperBound));
    }
    
    const closest = _nextLarger(this, lowerBound, upperBound);
    return closest === Infinity ? null : closest;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    return !this.root ? 0 : this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    return !this.root ? 0 : this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    return !this.root ? 0 : this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    return !this.root ? null : this.root.nextLarger(lowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
