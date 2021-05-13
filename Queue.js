class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{//using sinlgy linked list bothering about insertion and deletion in constant time O(1)
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){//single linked list push operation
        //if size is zero set first and last as currnet node
        var node = new Node(val);
        if(this.size === 0){
            this.first = node;
            this.last = node;
        }else{//push to last
            this.last.next = node;
            this.last = node; 
        }
        this.size++;//increase the size
        return this;
    }
    dequeue(){//sinlgy linked list shift operation
        var deletableNode = this.first;
        //size 0
        if(this.size === 0) return undefined;
        //size 1
        if(this.size === 1){
            this.last = null;
        }
        this.first = deletableNode.next;
        deletableNode.next = null;
        this.size--;//decrease the size
        return deletableNode.val;
    }
}
var queue = new Queue()
