class Node{//each element can have different type of values
    constructor(val){
        this.next = null;
        this.val = val;
    }
}
class SingleLinkedList{ insertion is o(1)
    constructor(){
        this.length = 0;
        this.head = null;//initially list is empty
        this.tail = null;
    }
    push(val){ //push at the end of the list
        var node = new Node(val);
        if(!this.head) this.head = node;
        if(this.tail) this.tail.next = node;
        this.tail = node;
        ++this.length;
        return this;
    }
    pop(){//pop last node from list
        if(!this.head) return undefined;
        var currentNode = this.head;
        if(!currentNode.next){
            this.tail = null;
            this.head = null;
            --this.length;
            return currentNode;
        }
        var previousNode = currentNode;
        while(currentNode.next){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
        --this.length;
        return currentNode;
    }
    shift(){//just remove head
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        if(!this.head)this.tail=null;
        --this.length;
        return currentHead;

    }
    unshift(val){//just add at head
        var node = new Node(val);
        if(!this.head){
           this.head = node;
           this.tail = node; 
        }else{
            node.next = this.head;
            this.head = node;
        }
        ++this.length;
        return this;
    }
    get(index){
        if(!this.head) return undefined;
        var currentNode = this.head;
        var count = 0;
        while(currentNode){
            if(index === count) return currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return undefined;
    }
    set(index,val){
        var node = this.get(index);
        if(!node) return false;
        else node.val = val;
        return true;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var thisNode = new Node(val);
        var previousNode = this.get(index-1);
        var nextNode = previousNode.next;
        previousNode.next = thisNode;
        thisNode.next = nextNode;
        ++this.length;
        return true;                
       
        
    }
    remove(index){//remove at index and decrease the length , check conditions and return undefined or node that is removed
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();//first
        if(index === this.length -1) return !!this.pop();//last
        var previousNode = this.get(index-1);
        var selectedNode = previousNode.next;
        previousNode.next = selectedNode.next;
        --this.length;
        return selectedNode;
    }
    reverse(){//reverse then and there on one go or one travarsal
        if(this.length <= 1) return;
        this.tail = this.head;
        var previousNode = this.head;
        var currentNode = previousNode.next;
        var nextNode = currentNode.next;
        while(nextNode){
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
            nextNode = null === nextNode.next ? null:nextNode.next;
        }
        currentNode.next = previousNode;
        this.head = currentNode;
        this.tail.next = null;
    }
    print(){
        var listArr = [];
        var currentNode = this.head;
        while(currentNode){
            listArr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(listArr);
    }
}
var list = new SingleLinkedList();





