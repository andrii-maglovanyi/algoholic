// @ts-nocheck
import { addVerticesAndEdges } from "@utils/graph";
import { Graph } from "./graph";

let directedGraph, undirectedGraph, weightedGraph;
const vertices = ["a", "b", "c", "d", "e", "f"];

const edges = [
  ["a", "b"],
  ["a", "e"],
  ["b", "c"],
  ["c", "d"],
  ["d", "f"],
  ["e", "d"],
  ["e", "f"],
  ["f", "a"],
];

const weights = [2, 11, 2, 3, 9, 5, 1, 4];

beforeEach(() => {
  directedGraph = addVerticesAndEdges(new Graph(true), vertices, edges);
  undirectedGraph = addVerticesAndEdges(new Graph(), vertices, edges);
  weightedGraph = addVerticesAndEdges(
    new Graph(),
    vertices,
    edges.map((edge, index) => [...edge, weights[index]])
  );
});

describe("Graph", () => {
  test("Should create and manipulate a directed graph", () => {
    expect(directedGraph.print()).toBe(
      "a => b e, b => c, c => d, d => f, e => d f, f => a"
    );
    expect(directedGraph.getVertex("b").key).toBe("b");
    expect(
      directedGraph.getVertex("b").neighbors.map(({ key }) => key)
    ).toEqual(["c"]);
    expect(directedGraph.getVertex("e").key).toBe("e");
    expect(
      directedGraph.getVertex("e").neighbors.map(({ key }) => key)
    ).toEqual(["d", "f"]);
    expect(directedGraph.getAllVertices().length).toBe(6);
    expect(directedGraph.getAllEdges().length).toBe(8);

    directedGraph.removeVertex("c");
    expect(directedGraph.getVertex("c")).toBeUndefined();
    expect(directedGraph.getVertex("b").neighbors).toEqual([]);
    expect(directedGraph.getAllVertices().length).toBe(5);
    expect(directedGraph.getAllEdges().length).toBe(6);
    expect(directedGraph.print()).toBe("a => b e, b, d => f, e => d f, f => a");
    expect(
      directedGraph.getVertex("a").neighbors.map(({ key }) => key)
    ).toEqual(["b", "e"]);

    directedGraph.removeEdge("a", "b");
    expect(
      directedGraph.getVertex("a").neighbors.map(({ key }) => key)
    ).toEqual(["e"]);
    expect(directedGraph.getVertex("b").neighbors).toEqual([]);
    expect(directedGraph.getAllVertices().length).toBe(5);
    expect(directedGraph.getAllEdges().length).toBe(5);
    expect(directedGraph.print()).toBe("a => e, b, d => f, e => d f, f => a");

    directedGraph.addVertex("g");
    expect(directedGraph.getAllVertices().length).toBe(6);
    expect(directedGraph.getAllEdges().length).toBe(5);
    expect(directedGraph.print()).toBe(
      "a => e, b, d => f, e => d f, f => a, g"
    );

    directedGraph.addEdge("g", "a");
    directedGraph.addEdge("d", "g");
    expect(directedGraph.getAllVertices().length).toBe(6);
    expect(directedGraph.getAllEdges().length).toBe(7);
    expect(directedGraph.print()).toBe(
      "a => e, b, d => f g, e => d f, f => a, g => a"
    );
    expect(
      directedGraph.getVertex("d").neighbors.map(({ key }) => key)
    ).toEqual(["f", "g"]);
    expect(
      directedGraph.getVertex("g").neighbors.map(({ key }) => key)
    ).toEqual(["a"]);
    expect(directedGraph.getEdge("d", "g").key).toEqual("d-g");
  });

  test("Should create and manipulate a undirected graph", () => {
    expect(undirectedGraph.print()).toBe(
      "a => b e f, b => a c, c => b d, d => c f e, e => a d f, f => d e a"
    );

    expect(undirectedGraph.getVertex("b").key).toBe("b");
    expect(
      undirectedGraph.getVertex("b").neighbors.map(({ key }) => key)
    ).toEqual(["a", "c"]);

    expect(undirectedGraph.getVertex("e").key).toBe("e");
    expect(
      undirectedGraph.getVertex("e").neighbors.map(({ key }) => key)
    ).toEqual(["a", "d", "f"]);

    expect(undirectedGraph.getAllVertices().length).toBe(6);
    expect(undirectedGraph.getAllEdges().length).toBe(8);

    undirectedGraph.removeVertex("c");
    expect(undirectedGraph.getVertex("c")).toBeUndefined();
    expect(
      undirectedGraph.getVertex("b").neighbors.map(({ key }) => key)
    ).toEqual(["a"]);
    expect(undirectedGraph.getAllVertices().length).toBe(5);
    expect(undirectedGraph.getAllEdges().length).toBe(6);
    expect(undirectedGraph.print()).toBe(
      "a => b e f, b => a, d => f e, e => a d f, f => d e a"
    );

    expect(
      undirectedGraph.getVertex("a").neighbors.map(({ key }) => key)
    ).toEqual(["b", "e", "f"]);
    undirectedGraph.removeEdge("a", "b");
    expect(
      undirectedGraph.getVertex("a").neighbors.map(({ key }) => key)
    ).toEqual(["e", "f"]);
    expect(undirectedGraph.getVertex("b").neighbors).toEqual([]);
    expect(undirectedGraph.getAllVertices().length).toBe(5);
    expect(undirectedGraph.getAllEdges().length).toBe(5);
    expect(undirectedGraph.print()).toBe(
      "a => e f, b, d => f e, e => a d f, f => d e a"
    );

    undirectedGraph.addVertex("g");
    expect(undirectedGraph.getAllVertices().length).toBe(6);
    expect(undirectedGraph.getAllEdges().length).toBe(5);
    expect(undirectedGraph.print()).toBe(
      "a => e f, b, d => f e, e => a d f, f => d e a, g"
    );

    undirectedGraph.addEdge("g", "a");
    undirectedGraph.addEdge("d", "g");

    expect(undirectedGraph.getAllVertices().length).toBe(6);
    expect(undirectedGraph.getAllEdges().length).toBe(7);
    expect(undirectedGraph.print()).toBe(
      "a => e f g, b, d => f e g, e => a d f, f => d e a, g => a d"
    );

    expect(
      undirectedGraph.getVertex("d").neighbors.map(({ key }) => key)
    ).toEqual(["f", "e", "g"]);

    expect(
      undirectedGraph.getVertex("g").neighbors.map(({ key }) => key)
    ).toEqual(["a", "d"]);

    expect(undirectedGraph.getEdge("a", "f").key).toEqual("f-a");
  });

  test("Breadth first search of undirected graph", () => {
    const mock = jest.fn();
    undirectedGraph.breadthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "e");
    expect(mock).toHaveBeenNthCalledWith(4, "f");
    expect(mock).toHaveBeenNthCalledWith(5, "c");
    expect(mock).toHaveBeenNthCalledWith(6, "d");
  });

  test("Breadth first search of directed graph", () => {
    const mock = jest.fn();
    directedGraph.breadthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "e");
    expect(mock).toHaveBeenNthCalledWith(4, "c");
    expect(mock).toHaveBeenNthCalledWith(5, "d");
    expect(mock).toHaveBeenNthCalledWith(6, "f");
  });

  test("Recursive depth first search of undirected graph", () => {
    const mock = jest.fn();
    undirectedGraph.recursiveDepthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "c");
    expect(mock).toHaveBeenNthCalledWith(4, "d");
    expect(mock).toHaveBeenNthCalledWith(5, "f");
    expect(mock).toHaveBeenNthCalledWith(6, "e");
  });

  test("Recursive depth first search of directed graph", () => {
    const mock = jest.fn();
    directedGraph.recursiveDepthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "c");
    expect(mock).toHaveBeenNthCalledWith(4, "d");
    expect(mock).toHaveBeenNthCalledWith(5, "f");
    expect(mock).toHaveBeenNthCalledWith(6, "e");
  });

  test("Iterative depth first search of undirected graph", () => {
    const mock = jest.fn();
    undirectedGraph.iterativeDepthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "f");
    expect(mock).toHaveBeenNthCalledWith(3, "e");
    expect(mock).toHaveBeenNthCalledWith(4, "d");
    expect(mock).toHaveBeenNthCalledWith(5, "c");
    expect(mock).toHaveBeenNthCalledWith(6, "b");
  });

  test("Iterative depth first search of directed graph", () => {
    const mock = jest.fn();
    directedGraph.iterativeDepthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "e");
    expect(mock).toHaveBeenNthCalledWith(3, "f");
    expect(mock).toHaveBeenNthCalledWith(4, "d");
    expect(mock).toHaveBeenNthCalledWith(5, "b");
    expect(mock).toHaveBeenNthCalledWith(6, "c");
  });

  test("Should return adjacency matrix of unweighted graph", () => {
    expect(undirectedGraph.getAdjacencyMatrix()).toEqual([
      [0, 1, 0, 0, 1, 1],
      [1, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0],
    ]);
  });

  test("Should return adjacency matrix of weighted graph", () => {
    expect(weightedGraph.getAdjacencyMatrix()).toEqual([
      [0, 2, 0, 0, 11, 4],
      [2, 0, 2, 0, 0, 0],
      [0, 2, 0, 3, 0, 0],
      [0, 0, 3, 0, 5, 9],
      [11, 0, 0, 5, 0, 1],
      [4, 0, 0, 9, 1, 0],
    ]);
  });

  test("Should return adjacency list of unweighted graph", () => {
    expect(undirectedGraph.getAdjacencyList()).toEqual({
      a: ["b", "e", "f"],
      b: ["a", "c"],
      c: ["b", "d"],
      d: ["c", "f", "e"],
      e: ["a", "d", "f"],
      f: ["d", "e", "a"],
    });
  });
});
