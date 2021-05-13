//insert the element in right position start from index 1 in first iteration and go on
// if any element added after sorting also it is easy to place that in its right position in this sorting
//if all elements are sorted already then it would be 0(n)
function insertionSort(arr){
    let swap = (array,index1,index2)=>{
        [array[index1],array[index2]] = [array[index2],array[index1]];
    }
    for(let i=1;i<arr.length;i++){
        var key = arr[i];
        for(var j=i-1;j>=0 && arr[j] > key;j--){//CLAPS if j is let instead of var it wont work
                arr[j+1] = arr[j];//move right for me(small element called key)
        }
        arr[j+1] = key;
    }
    return arr;
}
insertionSort([5,3,4,2,1]) // op [1,2,3,4,5]
//insertionSort([5,4,3,2,1,6]) // op [1,2,3,4,5,6]
//insertionSort([1,2,3,4,5,6]) // op [1,2,3,4,5,6]