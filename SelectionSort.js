//one iteration selects the min element and directly place that at front by swaping the front element
function selectionSort(arr){
    let minEleIndex = null;
    let swap = (array,index1,index2)=>{
        [array[index1],array[index2]] = [array[index2],array[index1]];
    }
    for(let i=0;i<arr.length;i++){
        minEleIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minEleIndex]) minEleIndex = j;
        }
        if(minEleIndex!==i) swap(arr,i,minEleIndex);
    }
    return arr;
}
//selectionSort([5,3,4,2,1]) // op [1,2,3,4,5]
//selectionSort([5,4,3,2,1,6]) // op [1,2,3,4,5,6]
selectionSort([1,2,3,4,5,6]) // op [1,2,3,4,5,6]