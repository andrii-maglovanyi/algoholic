import { Queue } from "../Queue/queue";
import { Stack } from "../Stack/stack";

type Value = string | number;
type Callback = (value: Value) => any;

class Vertex {
  constructor(public key: any, public edges: { [key: string]: Edge } = {}) {}

  addEdge(edge: Edge) {
    const key = Edge.getKey(
      this,
      this.key === edge.vertexA.key ? edge.vertexB : edge.vertexA
    );

    if (this.edges[key]) {
      throw new Error("The edge is already defined.");
    } else {
      this.edges[key] = edge;
    }
  }

  removeNeighbor(vertex: Vertex) {
    delete this.edges[Edge.getKey(this, vertex)];
  }

  get neighbors() {
    const edges = Object.values(this.edges);

    return edges.map(({ vertexA, vertexB }) =>
      vertexA === this ? vertexB : vertexA
    );
  }
}

export class Edge {
  constructor(
    public vertexA: Vertex,
    public vertexB: Vertex,
    public weight = 0
  ) {}

  public static getKey(vertexA: Vertex, vertexB: Vertex) {
    return `${vertexA.key}-${vertexB.key}`;
  }

  get key() {
    return Edge.getKey(this.vertexA, this.vertexB);
  }
}

export class Graph {
  constructor(private directed = false, private vertices: Vertex[] = []) {}

  addVertex(key: Value) {
    this.vertices.push(new Vertex(key));
  }

  getVertex(key: Value) {
    return this.vertices.find((vertex) => vertex.key === key);
  }

  getAllVertices() {
    return this.vertices;
  }

  removeVertex(key: Value) {
    const vertexToRemove = this.getVertex(key);
    if (vertexToRemove) {
      const verticesToClean = this.directed
        ? this.vertices
        : vertexToRemove.neighbors;

      verticesToClean.forEach((vertex) =>
        vertex.removeNeighbor(vertexToRemove)
      );

      this.vertices = this.vertices.filter((vertex) => vertex.key !== key);
    }
  }

  addEdge(vertexAKey: Value, vertexBKey: Value) {
    const vertexA = this.getVertex(vertexAKey);
    const vertexB = this.getVertex(vertexBKey);

    if (vertexA && vertexB) {
      const edge = new Edge(vertexA, vertexB);
      vertexA.addEdge(edge);

      if (!this.directed) {
        vertexB.addEdge(edge);
      }
    }
  }

  getEdge(vertexAKey: Value, vertexBKey: Value) {
    const vertexA = this.getVertex(vertexAKey);
    const vertexB = this.getVertex(vertexBKey);

    if (vertexA && vertexB) {
      return vertexA.edges[Edge.getKey(vertexA, vertexB)];
    }
  }

  getAllEdges() {
    return this.vertices.reduce(
      (edges, vertex) => [
        ...edges,
        ...Object.values(vertex.edges).filter((edge) => !edges.includes(edge)),
      ],
      [] as Edge[]
    );
  }

  removeEdge(vertexAKey: Value, vertexBKey: Value) {
    const vertexA = this.getVertex(vertexAKey);
    const vertexB = this.getVertex(vertexBKey);

    if (vertexA && vertexB) {
      vertexA.removeNeighbor(vertexB);
      vertexB.removeNeighbor(vertexA);
    }
  }

  print() {
    return this.vertices
      .map(({ key, neighbors }) => {
        let result = key;
        if (neighbors.length) {
          result += ` => ${neighbors
            .map((neighbor) => neighbor.key)
            .join(" ")}`;
        }

        return result;
      })
      .join(", ");
  }

  // Iterative breadth first uses queue to process vertices.
  breadthFirstSearch(startingVertexKey: string, cb: Callback) {
    const startingVertex = this.getVertex(startingVertexKey);
    if (startingVertex) {
      const visited = new Set();
      const queue = new Queue<Vertex>(startingVertex);

      while (!queue.isEmpty()) {
        const vertex = queue.dequeue() as Vertex;
        if (visited.has(vertex.key)) {
          continue;
        }

        visited.add(vertex.key);
        cb(vertex.key);

        vertex.neighbors.forEach((vertex: Vertex) => {
          if (!visited.has(vertex.key)) {
            queue.enqueue(vertex);
          }
        });
      }
    }
  }

  recursiveDepthFirstSearch(startingVertexKey: string, cb: Callback) {
    const startingVertex = this.getVertex(startingVertexKey);

    if (startingVertex) {
      const visited = new Set();

      (function explore(vertex: Vertex) {
        visited.add(vertex.key);
        cb(vertex.key);

        vertex.neighbors.forEach((vertex) => {
          if (!visited.has(vertex.key)) {
            explore(vertex);
          }
        });
      })(startingVertex);
    }
  }

  // Iterative search goes different direction in comparison with recursive.
  // Iterative depth first uses stack to process vertices.
  iterativeDepthFirstSearch(startingVertexKey: string, cb: Callback) {
    const startingVertex = this.getVertex(startingVertexKey);

    if (startingVertex) {
      const visited = new Set();
      const stack = new Stack<Vertex>(startingVertex);

      while (!stack.isEmpty()) {
        const vertex = stack.pop() as Vertex;
        if (visited.has(vertex.key)) {
          continue;
        }

        visited.add(vertex.key);
        cb(vertex.key);

        vertex.neighbors.forEach((vertex) => {
          if (!visited.has(vertex.key)) {
            stack.push(vertex);
          }
        });
      }
    }
  }
}
