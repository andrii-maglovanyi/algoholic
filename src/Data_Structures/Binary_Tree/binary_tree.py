class BinaryTree:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.value = data

    def contains(self, value):
        if value == self.value:
            return True

        if value < self.value:
            if self.left is None:
                return False
            return self.left.contains(value)
        else:
            if self.right is None:
                return False
            return self.right.contains(value)

    # Levelorder: This traverses nodes by levels instead of sub-trees. First, visit the root node; then visit all children of the root node- left to right.
    # Subsequently, go down levels till you reach the node that has no children- the leaf nodes.

    def breadthFirstTraversal(self, callback):
        queue = [self]
        while queue:
            root = queue.pop(0)
            if root:
                callback(root.value)
                if root.left:
                    queue.append(root.left)
                if root.right:
                    queue.append(root.right)

    # Preorder: Visit the root first, then traverse the left sub-tree, and then the right sub-tree.
    # Inorder: First, you traverse the left child and its sub-tree, visit the root and then the right child and its sub-tree.
    # Postorder: Traverse the left sub-tree, then traverse the right sub-tree and then visit the root node.
    def depthFirstTraversal(self, order, callback):
        if order == "pre":
            callback(self.value)
        if self.left is not None:
            self.left.depthFirstTraversal(order, callback)
        if order == "in":
            callback(self.value)
        if self.right is not None:
            self.right.depthFirstTraversal(order, callback)
        if order == "post":
            callback(self.value)

    def getMaxValue(self):
        if self.right is not None:
            return self.right.getMaxValue()
        return self.value

    def getMinValue(self):
        if self.left is not None:
            return self.left.getMinValue()
        return self.value

    def insert(self, value):
        if value < self.value:
            self.insertLeft(value)
        else:
            self.insertRight(value)

    def insertLeft(self, value):
        if self.left is None:
            self.left = BinaryTree(value)
        else:
            self.left.insert(value)

        return self.left

    def insertRight(self, value):
        if self.right is None:
            self.right = BinaryTree(value)
        else:
            self.right.insert(value)

        return self.right
