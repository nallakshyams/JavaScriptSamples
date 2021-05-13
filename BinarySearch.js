function binarySearch(arr, element){ // input would be sorted numbers and an element to be found
    //return not found incase of arr is empty
    if(arr.length === 0){
        return "not found";
    }
    if(arr.length === 1){
        return  arr[0] === element? 0 :  "not found";
    }
    //declare first and last index in the arr
    let first = 0, last = arr.length-1, middle = null;
    
    while(first <= last){
        middle = Math.floor(first+last/2);
        if(arr[middle] === element){
            return middle;
        }else if (arr[middle] < element){
            first = middle+1;
        }else if(arr[middle] > element){
            last = middle-1;
        }
    }
    return "not found";
}
//binarySearch([1,2,3,4], 4) //output 3
//binarySearch([1,2,3,4], 5) //output not found
//binarySearch([1,2,3,4], 1) //output 0
//binarySearch([1,2,3,4,5], 3) //output 2
//binarySearch([], 5) //output not found
//binarySearch([5], 5) //output 0
binarySearch([5], 6) //output not found
