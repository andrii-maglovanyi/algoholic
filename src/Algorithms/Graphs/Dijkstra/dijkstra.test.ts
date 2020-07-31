// @ts-nocheck

import { addVerticesAndEdges } from "@Utils/graph";

import { Graph } from "@Data_Structures/Graph/graph";
import { dijkstra } from "./dijkstra";

describe("Dijkstra", () => {
  test("Should find minimum paths of undirected graph", () => {
    const vertices = ["a", "b", "c", "d", "e", "f"];
    const edges = [
      ["a", "b", 4],
      ["a", "c", 2],
      ["b", "e", 3],
      ["c", "d", 2],
      ["c", "f", 4],
      ["d", "e", 3],
      ["d", "f", 1],
      ["e", "f", 1],
    ];

    let destination = "e";
    const path = [];

    const graph = addVerticesAndEdges<string>(new Graph(), vertices, edges);

    const { distances, previousVertices } = dijkstra(graph, "a");

    let cost = distances[destination];

    // Build up path
    while (previousVertices[destination]) {
      path.push(destination);
      destination = previousVertices[destination];
    }

    expect(cost).toBe(6);
    expect(path.reverse().join("")).toBe("acdfe");
  });

  test("Should find minimum paths of directed graph", () => {
    const vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const edges = [
      [0, 1, 1],
      [0, 2, 4],
      [0, 3, 9],

      [1, 8, 49],
      [1, 6, 25],
      [1, 4, 9],

      [2, 7, 25],
      [2, 8, 36],
      [2, 3, 1],

      [3, 8, 25],
      [3, 1, 4],

      [4, 6, 4],

      [5, 8, 9],
      [5, 7, 2],

      [6, 9, 9],
      [6, 4, 4],

      [7, 4, 9],
      [7, 6, 1],

      [8, 1, 49],

      [9, 1, 64],
      [9, 4, 25],
    ];

    let destination = 9;
    const path = [];

    const graph = addVerticesAndEdges(new Graph(true), vertices, edges);

    const { distances, previousVertices } = dijkstra(graph, 0);

    let cost = distances[destination];

    // Build up path
    while (previousVertices[destination] !== undefined) {
      path.push(destination);
      destination = previousVertices[destination];
    }

    expect(cost).toBe(23);
    expect(path.reverse()).toEqual([0, 1, 4, 6, 9]);
  });
});
