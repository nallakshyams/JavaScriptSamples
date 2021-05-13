class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
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
    find(val){//big O is O(logn) but not guarantted incase if elements are like 1,2,3,4,5,10,13,15 etc where 1 is the root
        var currentNode = this.root;
        if(!currentNode) return "not found";
        while(currentNode){
            if(currentNode.val === val) return "found";
            else if(val < currentNode.val) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }
        return "not found";
    }
}
var bst = new BinarySearchTree();

