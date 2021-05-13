
class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
class BinarySearchTree{//this could be a simple tree also for BFS
    constructor(){
        this.root = null;
    }
    insert(val){
        var node = new Node(val);
        var currentNode = this.root;
        if(!currentNode) this.root = node;
        else{
            while(currentNode){
                if(val === currentNode.val) return undefined;
                if(val < currentNode.val){
                    if(!currentNode.left){
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
            
        }
        return this;
    }
    
        //breadth first search

/*
        10
    5       12
   
  3  6    11    35

  o/p [10,5,12,3,6,11,35]

*/
    breadthFirstSearch(){
        //push root to queue(arr), and deque it and check left and right if exists then add them too and implemet deque
        if(!this.root) return undefined;
        var q = [];
        var bfs = [];
        var currentNode = this.root;
        q.push(currentNode);
        while(q.length !== 0){
            var deQueueNode = q.shift();
            bfs.push(deQueueNode.val);
            if(deQueueNode.left)q.push(deQueueNode.left);
            if(deQueueNode.right)q.push(deQueueNode.right);
        }
        return bfs;
    }



 //depth first search pre order we visit the node then entire left then right

/*
        10
    5       12
   
  3  6    11    35

  o/p [10,5,3,6,12,11,35]

*/
    dfsPreOrder(){
        var arr = [];
        function dfsHelper(node){ 
            arr.push(node.val);
            if(node.left)dfsHelper(node.left);
            if(node.right)dfsHelper(node.right); 
        }
        if(this.root){
            dfsHelper(this.root);
        }
        return arr; 
    }

    //depth first search post order visit entire left and entire right finally visit node

/*
        10
    5       12
   
  3  6    11    35

  o/p [3,6,5,11,35,12,10]

*/
  dfsPostOrder(){
    var arr = [];
    function dfsHelperPostOrder(node){
      if(node.left)dfsHelperPostOrder(node.left);
      if(node.right)dfsHelperPostOrder(node.right);
      arr.push(node.val);
    }
    if(this.root)dfsHelperPostOrder(this.root)
    return arr;
  }
  
//depth first search in order visit entire left and visit node entire right 
  /*
        10
    5       12
   
  3  6    11    35

  o/p [3,5,6,10,11,12,35]

*/
  dfsInOrder(){
    var arr = [];
    function dfsHelperInOrder(node){
      if(node.left)dfsHelperInOrder(node.left);
      arr.push(node.val);
      if(node.right)dfsHelperInOrder(node.right);
      
    }
    if(this.root)dfsHelperInOrder(this.root)
    return arr;
  }


}

var bst = new BinarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(12);
bst.insert(3);
bst.insert(6);
bst.insert(11);
bst.insert(35);
