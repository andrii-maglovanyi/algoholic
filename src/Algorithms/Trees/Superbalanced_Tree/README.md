# Write a function to see if a binary tree ↴ is _super-balanced_

A tree is _super-balanced_ if the difference between the depths of any two leaf nodes is no greater than one.

Here's a sample binary tree node class:

```javascript
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
```
