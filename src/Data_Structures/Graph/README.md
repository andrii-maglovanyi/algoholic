A **Graph** is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

Graphs can be (**directed** or **undirected**) and (**weighted** or **unweighted**):

![graphs]

### Adjacency Matrix

| -   | A   | B   | C   | D   | E   | F   |
| --- | --- | --- | --- | --- | --- | --- |
| A   | 0   | 1   | 0   | 0   | 1   | 1   |
| B   | 1   | 0   | 1   | 0   | 0   | 0   |
| C   | 0   | 1   | 0   | 1   | 0   | 0   |
| D   | 0   | 0   | 1   | 0   | 1   | 1   |
| E   | 1   | 0   | 0   | 1   | 0   | 1   |
| F   | 1   | 0   | 0   | 1   | 1   | 0   |

### Adjacency List

```javascript
{
    A: ["B", "E", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "F", "E"],
    E: ["A", "D", "F"],
    F: ["D", "E", "A"]
}
```

## Differences and Big O

`V` - number of vertices, `E` - number of edges

| Operation     | Adjacency list | Adjacency matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(`V`^2)         |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(`V` + `E`)   | O(`V`^2)         |
| Remove Edge   | O(`E`)         | O(1)             |
| Query         | O(`V` + `E`)   | O(1)             |
| Storage       | O(`V` + `E`)   | O(`V`^2)         |

## Pros & Cons

| Adjacency List                               | Adjacency Matrix                          |
| -------------------------------------------- | ----------------------------------------- |
| + Can take up less space (in sparse graphs). | - Takes up more space (in sparse graphs). |
| + Faster to iterate over all edges.          | - Slower to iterate over all edges.       |
| - Can be slower to lookup specific edge.     | + Faster to lookup specific edge          |

## Graph raversal uses

- Peer to peer networking
- Web crawling
- Finding closest matches
- Shortest path problems
  - GPS navigation
  - Solving mazes
  - AI (shortest path to win the game)

[graphs]: graphs.png "Types of Graphs"
