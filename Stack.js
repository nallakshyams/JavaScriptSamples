class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{//using sinlgy linked list bothering about insertion and deletion in constant time O(1)
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){//unshift of singly linked list
        //if size is zero then set first and last as current node
        //if not set current node as first
        var node = new Node(val);
        if(this.size ===0){
            this.first = node;
            this.last = node; 
        }else{
            var prevFirst = this.first;
            this.first = node;
            node.next = prevFirst; 
        }
        this.size++;
        return this;
    }
    pop(){//shift of single linked list
        //if size is zero then return null
        //else return first node
        var first = this.first;
        if(this.size === 0) return null;
        else if(this.size === 1){//IMP
            //this.first = null;no need because anyway we are doing below
            this.last = null;
        }
        this.first = first.next;
        first.next = null;
        this.size--;
        return first.val;
    }
}
var stack = new Stack()
