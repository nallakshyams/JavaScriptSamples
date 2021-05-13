class MinHeap{ //parent should be less than its children and max 2 nodes so its binary tree(full binary tree)
    //this can be used for priority queue
    constructor(){
        this.values = [];
    }
    insert(val){//swap if parent is greater than child and continue cehcking
        var arr = this.values;
        arr.push(val);
        var childIndex = arr.length-1;
        var parentIndex = Math.floor((childIndex-1)/2); //CLAPS
 	if(parentIndex < 0) return arr;
        while(arr[childIndex] < arr[parentIndex] ){//moving up
            var temp = arr[parentIndex];
            arr[parentIndex] = arr[childIndex];
            arr[childIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex-1)/2);
            if(parentIndex < 0) break; //once you reach the element to top break for example child insex is 0
        }
        return arr;
    }
    extractMin(){//get the root element and return adjust the heap
        //swap the last element with root or zeroth or parent element and pop to get the reuturning element
        //now compare parent element with its children and check if anything is less and swap with least and reassing the parent index
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
            if(rightChildIndex < arrLength && arr[rightChildIndex] < lowerChild ){
                lowerChild = arr[rightChildIndex];
                lowerChildIndex = rightChildIndex;
            }
            //compare with the parent  and sink down
            if(arr[parentIndex] > lowerChild){
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
var minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(27);
minHeap.insert(18);
minHeap.insert(33);
minHeap.insert(39);
minHeap.insert(41);


//[12,27,18,33,39,41]
/*
               12
          27 .    18
       33. 39 . 41 
*/


minHeap.insert(10);
/*
               10
          27 .    12
       33. 39 . 41  18
*/
//minHeap.extractMin()
/*
               12
          27 .    18
       33. 39 . 41  
*/
/*
               18
          27 .    41
       33. 39 .   
*/
/*
               27
          33 .    41
       39.  .   
*/
/*
               33
          39 .    41
       .  .   
*/
/*
               39
          41 .    
       .  .   
*/
/*
               41
           .    
       .  .   
*/