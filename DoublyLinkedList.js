class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{//both insertion and removal is 0(1)
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){//insert at last
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;//missed this part
        }
        this.length++;
        return this;
    }
    pop(){//remove from tail 
        if(this.length === 0)return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;//imp
        }
        this.length--;
        return poppedNode;
    }   
    shift(){//remove one ele at front
        //empty list
        //get the first elements next and set it as head and heads prev is null
        //decrease length
        //heads next should be null and return it

        if(this.length === 0){
            return undefined;
        }
        var shiftedEle = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = shiftedEle.next;
            this.head.prev = null;
            shiftedEle.next = null;
        }
        this.length--;
        return shiftedEle;
    }
    unshift(val){//insert one element at the top
        //empty
        //increase length
        //get the head and its prev to current node and current node next to prev head and head to currrent node 
        var node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
          var prevHead = this.head;
          prevHead.prev = node;
          node.next = prevHead;
          this.head = node;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var count;
        if(index < Math.floor(this.length/2)){//start from begenning
            var currentNode = this.head;
            count = 0;
            while(count !== index){
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        }else{//start from end
            var currentNode = this.tail;
            count = this.length-1;
            while(count !== index){
                currentNode = currentNode.prev;
                count--;
            }
            return currentNode;
        }
    }
    set(index,val){
        var node = this.get(index)
        if(node){
            node.val = val;
            return true;
        }else return false;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return undefined;

        if(index === 0){
            this.unshift(val);
        }else if(index === this.length){
            this.push(val);
        }else{
            var node = new Node(val);
            var currentNode = this.get(index);
            node.next = currentNode;
            node.prev = currentNode.prev;
            currentNode.prev.next = node;
            currentNode.prev = node;
            this.length++;
        }
        return this;
    }
    remove(index){
        if(index<0 || index>=this.length )return undefined;
        var removedEle;
        if(index===0) removedEle = this.shift();
        else if(index == this.length-1) removedEle = this.pop();
        else{
            removedEle = this.get(index);
            var prev = removedEle.prev;
            var next = removedEle.next;
            prev.next = next;
            next.prev = prev;
            removedEle.prev = null;
            removedEle.next = null;
            this.length--;
        }
        return removedEle;
    }
    reverseOld(){
        if(this.length <=1) return this;
        this.tail = this.head;
        this.tail.prev = this.head.next;

        var prevNode = this.head;
        var currentNode = prevNode.next;
        var nextNode = currentNode.next;
        
        while(nextNode){
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode.prev = currentNode;
            if(prevNode === this.head) prevNode.next = null;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        currentNode.next = prevNode;
        currentNode.prev = null;
        prevNode.prev = currentNode;
        this.head = currentNode;

        
        this.tail.next = null;
        return this;
    }

    reverse(){//strat with head for every node find the next node, assign next as prev and set prev as current and current as next
        if(this.length <=1) return this;
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;//IMP
        var next;
        for(var i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;//IMP
            node.prev = next;//this is the only difference bet singly and doubly
            prev = node;
            node = next;
        }
        this.print();
    }
    print(){
        var arr = [];
        var currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}
var list = new DoublyLinkedList();
