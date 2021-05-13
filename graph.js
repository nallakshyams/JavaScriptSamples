//adjacancy list prefereed when connection between nodes are less
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        if(this.adjacencyList[v1])this.adjacencyList[v1].push(v2);
        if(this.adjacencyList[v2])this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        if(this.adjacencyList[v1])this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2),1);
        if(this.adjacencyList[v2])this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1),1);
    }
    removeVertex(vertex){//super
        if(this.adjacencyList[vertex]){
            for(let i=0;i<this.adjacencyList[vertex].length;i++){
                this.removeEdge(this.adjacencyList[vertex][i],this.adjacencyList[vertex]);
            }
            delete this.adjacencyList[vertex];
        }
    }
    DFS(){//visti verted and neighbour and then neighbour of neighbour rather than other neighbour lol
        //take a vertex an recusrsively visit its adjacent vertices
        var arrList = [];
        var visitedObj = {};
        var graph = this;
        function recursiveTraversal(vertex){
            if(!vertex) return;
            visitedObj[vertex] = true;
            arrList.push(vertex);
            var adjacencyList = graph.adjacencyList[vertex];
            for(let i=0;i<adjacencyList.length;i++){
                if(!visitedObj[adjacencyList[i]])recursiveTraversal(adjacencyList[i]);
            }
        }
        recursiveTraversal("A");
        return arrList;
    }
     DFS_iterativeUsingStack(vertex){
        var arrList = [];
        var visitedObj = {};
        if(!vertex) return;
        //once you push to stack that means for sure its gonna vissited
        var stack = [vertex];
        visitedObj[vertex] = true;
        //end

        var currentVertex;
        var adjacencyList;
        while(stack.length){
            console.log(stack);
            currentVertex = stack.pop();
            arrList.push(currentVertex);
            adjacencyList = this.adjacencyList[currentVertex];
            for(let i=0;i<adjacencyList.length;i++){
                if(!visitedObj[adjacencyList[i]]){
                    stack.push(adjacencyList[i]); //once you push to stack that means for sure its gonna vissited
                    visitedObj[adjacencyList[i]] = true;  
                }
            }
        }
        return arrList;
    }
     BFS(vertex){
        var arrList = [];
        var visitedObj = {};
        if(!vertex) return;
        //once you push to stack that means for sure its gonna vissited
        var queue = [vertex];
        visitedObj[vertex] = true;
        //end

        var currentVertex;
        var adjacencyList;
        while(queue.length){
            console.log(queue);
            currentVertex = queue.shift();//CLAPS
            arrList.push(currentVertex);
            adjacencyList = this.adjacencyList[currentVertex];
            for(let i=0;i<adjacencyList.length;i++){
                if(!visitedObj[adjacencyList[i]]){
                    queue.push(adjacencyList[i]);
                    visitedObj[adjacencyList[i]] = true;
                }
            }

        }
        return arrList;
    }

}
var g = new Graph();
g.addVertex("A");g.addVertex("B");
g.addVertex("C");g.addVertex("D");
g.addVertex("E");g.addVertex("F");
g.addEdge("A","B");g.addEdge("A","C");
g.addEdge("B","D");g.addEdge("C","E");
g.addEdge("D","E");g.addEdge("D","F");
g.addEdge("E","F");

/*

            A 
       B        C

     D            E
            F

 */