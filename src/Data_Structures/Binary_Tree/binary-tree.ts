type Callback = (value: Value) => any;
type Value = string | number;

export class BinaryTree {
  public left: BinaryTree | null = null;
  public right: BinaryTree | null = null;

  constructor(public value: Value) {}

  contains(value: Value): boolean {
    if (value === this.value) return true;

    if (value < this.value) {
      if (!this.left) return false;
      return this.left.contains(value);
    } else {
      if (!this.right) return false;
      return this.right.contains(value);
    }
  }

  // Levelorder: This traverses nodes by levels instead of sub-trees. First, visit the root node; then visit all children of the root node- left to right.
  // Subsequently, go down levels till you reach the node that has no children- the leaf nodes.
  breadthFirstTraversal(callback: Callback) {
    const queue = [this as BinaryTree];
    while (queue.length) {
      const root = queue.shift();
      if (root) {
        callback(root.value);
        root.left && queue.push(root.left);
        root.right && queue.push(root.right);
      }
    }
  }

  // Preorder: Visit the root first, then traverse the left sub-tree, and then the right sub-tree.
  // Inorder: First, you traverse the left child and its sub-tree, visit the root and then the right child and its sub-tree.
  // Postorder: Traverse the left sub-tree, then traverse the right sub-tree and then visit the root node.
  depthFirstTraversal(order: string, callback: Callback) {
    order === "pre" && callback(this.value);
    this.left && this.left.depthFirstTraversal(order, callback);
    order === "in" && callback(this.value);
    this.right && this.right.depthFirstTraversal(order, callback);
    order === "post" && callback(this.value);
  }

  getMaxValue(): Value {
    if (this.right) return this.right.getMaxValue();
    return this.value;
  }

  getMinValue(): Value {
    if (this.left) return this.left.getMinValue();
    return this.value;
  }

  insert(value: Value) {
    if (value <= this.value) {
      this.insertLeft(value);
    } else {
      this.insertRight(value);
    }
  }

  insertLeft(value: Value) {
    if (!this.left) {
      this.left = new BinaryTree(value);
    } else {
      this.left.insert(value);
    }

    return this.left;
  }

  insertRight(value: Value) {
    if (!this.right) {
      this.right = new BinaryTree(value);
    } else {
      this.right.insert(value);
    }

    return this.right;
  }

  print(order = "in") {
    let result = "";

    const visit = (value: Value) => {
      result += result.length === 0 ? value : ` => ${value}`;
    };

    this.depthFirstTraversal(order, visit);

    return result;
  }
}
