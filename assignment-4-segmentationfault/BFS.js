//Breadth First Search
//graph
//finding shortest path between two nodes
/* Graphs: Breadth-first search */

function bfs(graph, root) {//function takes the key and value where key is node and value is distance from root node.
  var nodesLen = {};//to store distance from nodes to the root node
  
  for (var i = 0; i < graph.length; i++) {//starting all the distances at infinity
    nodesLen[i] = Infinity;//node which is not reachable from start node
  }
  nodesLen[root] = 0; //distance of root node from root node is set to 0 initially
  
  var queue = [root]; //creating a queue to keep track of nodes to visit
  var current; //keep track of current node that we are traversing

  while (queue.length != 0) {//keep traversing through nodes until there are no more nodes to traverse
    current = queue.shift();//popping off a node from queue to traverse..initial node will be root node
    
    var curConnected = graph[current];//getting all the nodes connected to the current node.
    var neighborIdx = []; //allocating neighbor index variable to an array to keep track of list of nodes that are connected to current node
    var idx = curConnected.indexOf(1); //gets the first node connected to the current node. index(1) means connected node.
    while (idx != -1) {//checking the condition for no node connected to the node at index 1 and setting value to -1 
      neighborIdx.push(idx); //pushing it to list of neighbors
      idx = curConnected.indexOf(1, idx + 1); //search for next connected node
    }
	//we will find All the nodes are connected to the current node
    
    for (var j = 0; j < neighborIdx.length; j++) {//looping through the connected nodes to get the distance
	
      if (nodesLen[neighborIdx[j]] == Infinity) {//setting the length
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); //pushing the value to the queue
      }
    }
  }
  return nodesLen;//returning nodes length array
};
//Using adjacency matrix graph for showing the path between two nodes
//1 for connected and 0 for not connected 
var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
//running bfs function by passing the graph and checking how far is each node from node 1
console.log(bfs(exBFSGraph, 1));


//Reference:https://ru-clip.com/video/wu0ckYkltus/graphs-breadth-first-search-beau-teaches-javascript.html