class MaxHeap{ //parent should be greater than its children and max 2 nodes so its binary tree(full binary tree)
    constructor(){
        this.values = [];
    }
    insert(val){//swap if parent is less than child and continue cehcking
        var arr = this.values;
        arr.push(val);
        var childIndex = arr.length-1;
        var parentIndex = Math.floor((childIndex-1)/2); //CLAPS
	if(parentIndex < 0) return arr;
        while(arr[childIndex] > arr[parentIndex] ){//moving up
            var temp = arr[parentIndex];
            arr[parentIndex] = arr[childIndex];
            arr[childIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex-1)/2);
            if(parentIndex < 0) break; //once you reach the element to top break for example child insex is 0
        }
        return arr;
    }
    extractMax(){//get the root element and return adjust the heap
        //swap the last element with root or zeroth or parent element and pop to get the reuturning element
        //now compare parent element with its children and check if anything is greater and swap with greatest and reassing the parent index
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
        while(leftChildIndex < arrLength ){
            //find greatest child 
            var greaterChild = arr[leftChildIndex];
            var greaterChildIndex = leftChildIndex;
            if(rightChildIndex < arrLength  && arr[rightChildIndex] > greaterChild ){
                greaterChild = arr[rightChildIndex];
                greaterChildIndex = rightChildIndex;
            }
            //compare with the parent  and sink down
            if(arr[parentIndex] < greaterChild){
                var temp = arr[parentIndex];
                arr[parentIndex] = arr[greaterChildIndex];
                arr[greaterChildIndex] = temp;

                parentIndex = greaterChildIndex;
                leftChildIndex = 2*parentIndex+1;
                rightChildIndex = 2*parentIndex+2;
            }else if(rightChildIndex >= arrLength)break;//IMP
        }
        return removedEle;
    }
}
var maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);


//[41,39,33,18,27,12]
/*
               41
          39 .    33
       18 . 27 . 12 
*/


//maxHeap.insert(50);

/*
               50
          39 .    41
       18 . 27 . 12 33
*/
//extractMax
/*
               39
          27 .    33
       18 . 12 .  
*/
/* one more time
               33
          27 .    12
       18 .  .  
*/
/*
               27
          18 .    12
        .  .  
*/
/*
               18
          12 .    
        .  .  
*/
/*
               12
           .    
        .  .  
*/
/*
               
           .    
        .  .  
*/