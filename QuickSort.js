//pivot element as first element in the array
let swap = (array,indx1,indx2)=>{
        [[array[indx1]],[array[indx2]]] = [[array[indx2]],[array[indx1]]];
}
function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;//CLAPS .If first element itself is less than pivot then no need to swap
    for(let j=low;j<high;j++){
        if(arr[j] < pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,high);
    return i+1;
}

//partition([4,3,5,2,1],0,0); 

function quickSort(arr,low=0,high=arr.length-1){
    if(low < high){
        var pi = partition(arr,low,high);//partition index
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
    return arr;
}
quickSort([100,-3,4,6,9,1,2,5,3]);
