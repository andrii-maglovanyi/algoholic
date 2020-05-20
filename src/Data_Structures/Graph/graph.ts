import { Queue } from "../Queue/queue";
import { Stack } from "../Stack/stack";

type Callback<T> = (value: T) => any;

export class Vertex<T> {
  constructor(public key: T, public edges: { [key: string]: Edge<T> } = {}) {}

  addEdge(edge: Edge<T>) {
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

  removeNeighbor(vertex: Vertex<T>) {
    delete this.edges[Edge.getKey(this, vertex)];
  }

  get neighbors() {
    const edges = Object.values(this.edges);

    return edges.map(({ vertexA, vertexB }) =>
      vertexA === this ? vertexB : vertexA
    );
  }
}

export class Edge<T> {
  constructor(
    public vertexA: Vertex<T>,
    public vertexB: Vertex<T>,
    public weight = 0
  ) {}

  public static getKey<U>(vertexA: Vertex<U>, vertexB: Vertex<U>) {
    return `${vertexA.key}-${vertexB.key}`;
  }

  get key() {
    return Edge.getKey(this.vertexA, this.vertexB);
  }
}

export class Graph<T> {
  constructor(private directed = false, private vertices: Vertex<T>[] = []) {}

  addVertex(key: T) {
    this.vertices.push(new Vertex<T>(key));
  }

  getVertex(key: T) {
    return this.vertices.find((vertex) => vertex.key === key);
  }

  getAllVertices() {
    return this.vertices;
  }

  removeVertex(key: T) {
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

  addEdge(vertexAKey: T, vertexBKey: T, weight: number | undefined) {
    const vertexA = this.getVertex(vertexAKey);
    const vertexB = this.getVertex(vertexBKey);

    if (vertexA && vertexB) {
      const edge = new Edge(vertexA, vertexB, weight);
      vertexA.addEdge(edge);

      if (!this.directed) {
        vertexB.addEdge(edge);
      }
    }
  }

  getEdge(vertexAKey: T, vertexBKey: T) {
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
      [] as Edge<T>[]
    );
  }

  removeEdge(vertexAKey: T, vertexBKey: T) {
    const vertexA = this.getVertex(vertexAKey);
    const vertexB = this.getVertex(vertexBKey);

    if (vertexA && vertexB) {
      vertexA.removeNeighbor(vertexB);
      vertexB.removeNeighbor(vertexA);
    }
  }

  // Iterative breadth first uses queue to process vertices.
  breadthFirstSearch(startingVertexKey: T, cb: Callback<T>) {
    const startingVertex = this.getVertex(startingVertexKey);
    if (startingVertex) {
      const visited = new Set();
      const queue = new Queue<Vertex<T>>(startingVertex);

      while (!queue.isEmpty()) {
        const vertex = queue.dequeue() as Vertex<T>;
        if (visited.has(vertex.key)) {
          continue;
        }

        visited.add(vertex.key);
        cb(vertex.key);

        vertex.neighbors.forEach((vertex: Vertex<T>) => {
          if (!visited.has(vertex.key)) {
            queue.enqueue(vertex);
          }
        });
      }
    }
  }

  recursiveDepthFirstSearch(startingVertexKey: T, cb: Callback<T>) {
    const startingVertex = this.getVertex(startingVertexKey);

    if (startingVertex) {
      const visited = new Set();

      (function explore(vertex: Vertex<T>) {
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
  iterativeDepthFirstSearch(startingVertexKey: T, cb: Callback<T>) {
    const startingVertex = this.getVertex(startingVertexKey);

    if (startingVertex) {
      const visited = new Set();
      const stack = new Stack<Vertex<T>>(startingVertex);

      while (!stack.isEmpty()) {
        const vertex = stack.pop() as Vertex<T>;
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

  getAdjacencyList() {
    return this.vertices.reduce((list, { key, neighbors }) => {
      list[String(key)] = neighbors.map(({ key }) => key);
      return list;
    }, {} as { [key: string]: T[] });
  }

  getAdjacencyMatrix() {
    const indexes = this.getVerticesIndexes();

    const matrix = Array(this.vertices.length)
      .fill(null)
      .map(() => Array(this.vertices.length).fill(0));

    this.vertices.forEach((vertex, index) => {
      vertex.neighbors.forEach((neighbor) => {
        const neighborIndex = indexes[String(neighbor.key)];
        const weight = this.getEdge(vertex.key, neighbor.key)?.weight || 1;
        matrix[index][neighborIndex] = weight;
      });
    });

    return matrix;
  }

  print() {
    return this.vertices
      .map(({ key, neighbors }) => {
        let result = String(key);
        if (neighbors.length) {
          result += ` => ${neighbors
            .map((neighbor) => neighbor.key)
            .join(" ")}`;
        }

        return result;
      })
      .join(", ");
  }

  private getVerticesIndexes() {
    return this.vertices.reduce(
      (indexes, { key }, index) => ({ ...indexes, [String(key)]: index }),
      {} as { [key: string]: number }
    );
  }
}
