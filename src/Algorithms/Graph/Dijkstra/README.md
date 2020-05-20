## Usages

- GPS - find fastest route.
- Network routing - finds open shortest path for data.
- Biology - used to model the spread of viruses among humans.
- Airline tickets - finding cheapest route to your destination.

## Approach

- Every time before visiting a new node, pick the node with the smallest weight to visit first.
- Once moved to the node, look for each of its neighbors.
- For each neighbor, calculate the weight by summing the total edges that lead to the node _from the starting node_.
- If the new total weight to a node is less than previous total, store new smaller weight to that node.
