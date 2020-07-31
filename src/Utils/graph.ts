import { Graph } from "@Data_Structures/Graph/graph";

export const addVerticesAndEdges = <T>(
  graph: Graph<T>,
  vertices: T[],
  edges: [T, T, number | undefined][]
) => {
  vertices.forEach((vertex) => graph.addVertex(vertex));
  edges.forEach(([vertexA, vertexB, weight]) => {
    graph.addEdge(vertexA, vertexB, weight);
  });

  return graph;
};
