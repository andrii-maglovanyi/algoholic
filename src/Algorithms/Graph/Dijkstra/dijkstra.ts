import { Graph, Vertex } from "@Data_Structures/Graph/graph";
import { PriorityQueue } from "@Data_Structures/Priority_Queue/priority-queue";

export const dijkstra = <T>(graph: Graph<T>, startVertexKey: T) => {
  const queue = new PriorityQueue();
  const distances: { [key: string]: number } = {};
  const previousVertices: { [key: string]: T | symbol } = {};
  const visitedVertices = new Set();

  const startVertex = graph.getVertex(startVertexKey);

  if (!startVertex) {
    return null;
  }

  // Set initial state.
  // Set distances with a value of Infinity, except for the starting vertex,
  // which is should have value of 0.
  // Add each vertex with a priority of Infinity to th priority queue, except
  // the starting vertex, which should have a priority of 0 - starting point.
  graph.getAllVertices().forEach((vertex) => {
    if (vertex.key === startVertex.key) {
      distances[String(vertex.key)] = 0;
      queue.enqueue(vertex, 0);
    } else {
      distances[String(vertex.key)] = Infinity;
      queue.enqueue(vertex, Infinity);
    }

    previousVertices[String(vertex.key)] = Symbol();
  });

  // As long as there are items in the queue
  while (!queue.isEmpty()) {
    // Take the vertex with a smallest value
    const currentVertex = queue.dequeue()?.value as Vertex<T>;

    if (!currentVertex) {
      continue;
    }

    // Loop through each neighbor of current vertex
    currentVertex.neighbors.forEach((vertex) => {
      if (vertex && !visitedVertices.has(vertex.key)) {
        const edgeToNeighbor = graph.getEdge(currentVertex.key, vertex.key);
        if (!edgeToNeighbor) {
          return null;
        }
        // Calculate new distance to the neighbor (current distance + distance to neighbor)
        const distanceToNeighbor =
          distances[String(currentVertex.key)] + edgeToNeighbor.weight;

        if (distanceToNeighbor < distances[String(vertex.key)]) {
          // Update smallest distance to neighbor
          distances[String(vertex.key)] = distanceToNeighbor;
          // Update previous step to neighbor
          previousVertices[String(vertex.key)] = currentVertex.key;
          // Enqueue in priority queue with new priority
          queue.enqueue(vertex, distanceToNeighbor);
        }
      }
    });

    visitedVertices.add(currentVertex.key);
  }

  return {
    distances,
    previousVertices,
  };
};
