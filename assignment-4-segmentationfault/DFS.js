    //This is the DFS algorithm using graphs

    //The code is implemented using stack functions such as push and pop as DFS search goes by the depth and the best way to implement the algorithm is by using a stack

    //First step of the DFS algorithm is to create a a Node class.

    // Step 1: Create class Node having constructor with parameters nodeName childNodes. nodeName paramen
    class Node{

        constructor(nodeName, childNodes){
            this.nodeName=nodeName;
            this.childNodes=childNodes;
            this.visited=false; 
        }

    }

    //Step 2 : Create nodes from a to j 
    let a=new Node('a');
    let b=new Node('b');
    let c=new Node('c');
    let d=new Node('d');
    let e=new Node('e');
    let f=new Node('f');
    let g=new Node('g');
    let h=new Node('h');
    let i=new Node('i');
    let j=new Node('j');


    // Step 3 : Store all the Nodes inside an array
    let Nodes = [a,b,c,d,e,f,g,h,i,j];

    // Step 4 : Connect the nodes and create a graph. So this step basically creates a graph in which all the nodes are connected to their childnodes. If you look at the nodes, some childnodes act as nodes and have childnodes. This is how the graphs work.
    a.childNodes = [b,c,d];
    b.childNodes = [a,e,f];
    c.childNodes = [a,f];
    d.childNodes = [a,f,i,j];
    e.childNodes = [b,d,g];
    f.childNodes = [b,c,d,g,h];
    g.childNodes = [e,f];
    h.childNodes = [f,i];
    i.childNodes = [h,d];
    j.childNodes = [d];

    // Step 4 : Now we need to create a stack to keep a track of the visited nodes. This is to put a node in a stack and to visit the childnodes of the stack. The childnodes of the nodes are also pushed and their childnodes are visited. Once there are no more childnodes, the node is popped out and the next node is pushed into the stack. This is basically the entire functionality of DFS.

    let stack = []; 

    //Since, a is considered to be the root node, it needs to be pushed before we start with the search so that the start point will be node a
    stack.push(a);

    //Now the DFS search output needs to be stored in another array named dfsOutput so that we can just print this array at the end of the code.
    let dfsOutput = [];

    //Now the depth first search begins
    function DFS(){

       
        dfsLoop : while(stack.length) {
            let node = stack[stack.length-1];
        
    // Now we need to check if the node in the node variable has been visited or not.
    //If it is not visited, we need to visit that node and push it into the dfsOutput stack
    if (!node.visited){
        node.visited = true;
        dfsOutput.push(node);
    }

    //Now we have to verify wether the Child nodes of the nodes are visited or not. 
    //If they are also not visited, push them in the stack.
    for(let child of node.childNodes)
    {
        if(!child.visited){
            stack.push(child);
        continue dfsLoop;
        }
        

    }
//Once there are no more chidnodes, just pop the node out of the stack
    stack.pop();
    }

    }

    //Run the function so that the dfs path can be calculated
    DFS();

    //Print the DFS path 
    console.log("The Depth First Search has been implemented successfully and the output is:");
    console.log('DFS:', dfsOutput.map(child => child.nodeName));        