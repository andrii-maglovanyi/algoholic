import { Queue } from "../Queue/queue";

type Callback = (value: string) => any;

class Node {
  constructor(public key: any, public neighbors: Node[] = []) {}

  addNeighbor(node: Node) {
    this.neighbors.push(node);
  }
}

export class Graph {
  constructor(
    private directed = false,
    private nodes: Node[] = [],
    private edges: string[] = []
  ) {}

  addNode(key: any) {
    this.nodes.push(new Node(key));
  }

  getNode(key: any) {
    return this.nodes.find((node) => node.key === key);
  }

  addEdge(nodeAKey: any, nodeBKey: any) {
    const nodeA = this.getNode(nodeAKey);
    const nodeB = this.getNode(nodeBKey);

    if (nodeA && nodeB) {
      nodeA.addNeighbor(nodeB);
      this.edges.push(`${nodeAKey}-${nodeBKey}`);

      if (!this.directed) {
        nodeB.addNeighbor(nodeA);
      }
    }
  }

  print() {
    return this.nodes
      .map(({ key, neighbors }) => {
        let result = key;

        if (neighbors.length) {
          result += ` => ${neighbors
            .map((neighbor) => neighbor.key)
            .join(" ")}`;
        }

        return result;
      })
      .join("\n");
  }

  breadthFirstSearch(startingNodeKey: string, visitFn: Callback) {
    const startingNode = this.getNode(startingNodeKey);
    const visited = this.nodes.reduce((acc: { [key: string]: any }, node) => {
      acc[node.key] = false;
      return acc;
    }, {});

    const queue = new Queue(startingNode);

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();

      if (!visited[currentNode.key]) {
        visitFn(currentNode.key);
        visited[currentNode.key] = true;
      }

      currentNode.neighbors.forEach((node: Node) => {
        if (!visited[node.key]) {
          queue.enqueue(node);
        }
      });
    }
  }

  depthFirstSearch(startingNodeKey: string, visitFn: Callback) {
    const startingNode = this.getNode(startingNodeKey);
    const visited = this.nodes.reduce((acc: { [key: string]: any }, node) => {
      acc[node.key] = false;
      return acc;
    }, {});

    const explore = (node: Node) => {
      if (visited[node.key]) {
        return;
      }

      visitFn(node.key);
      visited[node.key] = true;

      node.neighbors.forEach((node) => {
        explore(node);
      });
    };

    if (startingNode) {
      explore(startingNode);
    }
  }
}
