//largest element will go to top like a bubble

function bubbleSort(arr){
    let swaps = false;
    const swap = (array,indx1,indx2)=>{
        [[array[indx1]],[array[indx2]]] = [[array[indx2]],[array[indx1]]];
    }
    for(let i=0;i<arr.length;i++){
        swaps = false;
        for(let j=0;j<arr.length-i-1;j++){//CLAPS for -i-1 and if no swaps in complete iterations that means elements are already sorted
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
                swaps = true;
            }
        }
        if(!swaps) break;
    }
    return arr;
}

bubbleSort([5,4,3,2,1]) //op [1,2,3,4,5]
//bubbleSort([2,1,4,5,6]) //op [1,2,3,4,5]