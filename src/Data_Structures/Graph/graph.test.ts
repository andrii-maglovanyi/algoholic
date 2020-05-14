import { Graph } from "./graph";

describe("Graph", () => {
  test("Should create a graph", () => {
    const graph = new Graph(true);

    graph.addNode("Andrii");
    graph.addNode("Iryna");
    graph.addNode("Mark");
    graph.addNode("Liudmyla");
    graph.addNode("Yurii");

    graph.addEdge("Andrii", "Iryna");
    graph.addEdge("Iryna", "Andrii");
    graph.addEdge("Andrii", "Mark");
    graph.addEdge("Iryna", "Mark");

    graph.print();
  });

  test("Breadth first search", () => {
    const graph = new Graph();

    const nodes = ["a", "b", "c", "d", "e", "f"];
    const edges = [
      ["a", "b"],
      ["a", "e"],
      ["a", "f"],
      ["b", "d"],
      ["b", "e"],
      ["c", "b"],
      ["d", "c"],
      ["d", "e"],
    ];

    nodes.forEach((node) => graph.addNode(node));
    edges.forEach(([nodeA, nodeB]) => {
      graph.addEdge(nodeA, nodeB);
    });

    const mock = jest.fn();
    graph.breadthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "e");
    expect(mock).toHaveBeenNthCalledWith(4, "f");
    expect(mock).toHaveBeenNthCalledWith(5, "d");
    expect(mock).toHaveBeenNthCalledWith(6, "c");
  });

  test("Depth first search", () => {
    const graph = new Graph();

    const nodes = ["a", "b", "c", "d", "e", "f"];
    const edges = [
      ["a", "b"],
      ["a", "e"],
      ["a", "f"],
      ["b", "d"],
      ["b", "e"],
      ["c", "b"],
      ["d", "c"],
      ["d", "e"],
    ];

    nodes.forEach((node) => graph.addNode(node));
    edges.forEach(([nodeA, nodeB]) => {
      graph.addEdge(nodeA, nodeB);
    });

    const mock = jest.fn();
    graph.depthFirstSearch("a", mock);
    expect(mock).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenNthCalledWith(1, "a");
    expect(mock).toHaveBeenNthCalledWith(2, "b");
    expect(mock).toHaveBeenNthCalledWith(3, "d");
    expect(mock).toHaveBeenNthCalledWith(4, "c");
    expect(mock).toHaveBeenNthCalledWith(5, "e");
    expect(mock).toHaveBeenNthCalledWith(6, "f");
  });
});
