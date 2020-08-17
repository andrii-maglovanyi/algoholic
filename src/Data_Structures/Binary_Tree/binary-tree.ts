export class BinaryTree<T extends string | number> {
  public left: BinaryTree<T> | null = null;
  public right: BinaryTree<T> | null = null;

  constructor(public value: T) {}

  contains(value: T): boolean {
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
  breadthFirstTraversal(callback: (value: T) => any) {
    const queue = [this as BinaryTree<T>];
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
  depthFirstTraversal(order: string, callback: (value: T) => any) {
    order === "pre" && callback(this.value);
    this.left && this.left.depthFirstTraversal(order, callback);
    order === "in" && callback(this.value);
    this.right && this.right.depthFirstTraversal(order, callback);
    order === "post" && callback(this.value);
  }

  getMaxValue(): T {
    if (this.right) return this.right.getMaxValue();
    return this.value;
  }

  getMinValue(): T {
    if (this.left) return this.left.getMinValue();
    return this.value;
  }

  insert(value: T) {
    if (value <= this.value) {
      this.insertLeft(value);
    } else {
      this.insertRight(value);
    }
  }

  insertLeft(value: T) {
    if (!this.left) {
      this.left = new BinaryTree<T>(value);
    } else {
      this.left.insert(value);
    }

    return this.left;
  }

  insertRight(value: T) {
    if (!this.right) {
      this.right = new BinaryTree<T>(value);
    } else {
      this.right.insert(value);
    }

    return this.right;
  }

  print(order = "in") {
    let result = "";

    const visit = (value: T) => {
      result += result.length === 0 ? value : ` => ${value}`;
    };

    this.depthFirstTraversal(order, visit);

    return result;
  }
}
