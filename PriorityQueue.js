//everything is same as min heap except that based on pripority rather than actual values 
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }

}
class PriorityQueue{ //parent should be less than its children and max 2 nodes so its binary tree(full binary tree)
    
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){//swap if parent is greater than child and continue 
        var arr = this.values;
        if(undefined === priority) return undefined;
        var node = new Node(val,priority);
        arr.push(node);
        var childIndex = arr.length-1;
        var parentIndex = Math.floor((childIndex-1)/2); //CLAPS
        if(parentIndex < 0)return arr;
        while(arr[childIndex].priority < arr[parentIndex].priority ){//moving up
            var temp = arr[parentIndex];
            arr[parentIndex] = arr[childIndex];
            arr[childIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex-1)/2);
            if(parentIndex < 0) break; //once you reach the element to top break for example child insex is 0
        }
        return arr;
    }

    dequeue(){
        //swap the last element with root or zeroth or parent element and pop to get the reuturning element
        //now compare parent element with its children and check if anything is less and swap with least and re-assining the parent index
        var arr = this.values;
        var arrLength = arr.length;
        if(arrLength === 0) return undefined;
        if(arrLength === 1) return arr.pop();

        var parentIndex = 0;
        var childIndex = arrLength-1;
        var temp = arr[parentIndex];
        arr[parentIndex] = arr[childIndex];
        arr[childIndex] = temp;
        var removedEle = arr.pop();


        var leftChildIndex = 2*parentIndex+1; 
        var rightChildIndex = 2*parentIndex+2;
        arrLength = arr.length;
        while(leftChildIndex < arrLength){
            //find greatest child 
            var lowerChild = arr[leftChildIndex];
            var lowerChildIndex = leftChildIndex;
            if(rightChildIndex < arrLength && arr[rightChildIndex].priority < lowerChild.priority ){
                lowerChild = arr[rightChildIndex];
                lowerChildIndex = rightChildIndex;
            }
            //compare with the parent  and sink down
            if(arr[parentIndex].priority > lowerChild.priority){
                var temp = arr[parentIndex];
                arr[parentIndex] = arr[lowerChildIndex];
                arr[lowerChildIndex] = temp;

                parentIndex = lowerChildIndex;
                leftChildIndex = 2*parentIndex+1;
                rightChildIndex = 2*parentIndex+2;
            }else if(rightChildIndex >= arrLength)break;
        }
        return removedEle;
    }
}
var pq = new PriorityQueue();
pq.enqueue("cold",10);
pq.enqueue("cough",9);
pq.enqueue("fever",8);
pq.enqueue("cancer",2);
pq.enqueue("wound",3);
pq.enqueue("heartstroke",1);
//dequeue
/*         1 
       3   2
     10 8 9
*/

/*        2
       3   9
     10 8 
*/
/*        3
       8   9
     10  
*/
/*        8
       10   9
       
*/
/*        9
       10   
       
*/
/*        10
          
       
*/
