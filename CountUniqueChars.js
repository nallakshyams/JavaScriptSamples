/*function countUniqueValues(arr){ // input would be sorted numbers
    if(arr.length <= 1) return arr.length;
    var ptr1 = 0 , ptr2 =1, count = 1;
    while(ptr2 !== arr.length){
        if(arr[ptr1] !== arr[ptr2]){ 
            count++; 
        }
        ptr1++;
        ptr2++;
    }
    return count;
}*/
//multi pointers
function countUniqueValues(arr){ // input would be sorted numbers and we need to find unique no of chars
// check arr lenght is less than or equla to 1 and return there itself
    if(arr.length <= 1) return arr.length;
    //declare pointers which will move from 0,1 till the end of the array
    var ptr1 = 0 , ptr2 =1;
    while(ptr2 !== arr.length){
        if(arr[ptr1] !== arr[ptr2]){ 
            ptr1++;
            arr[ptr1] = arr[ptr2]//CLAPS becuase we can replace the arr element no issues
        }
        ptr2++;
    }
    return ++ptr1;
}

//countUniqueValues([1,1,1,2,2,3]) //output 3
//countUniqueValues([1,2,3,4]) //output 4
//countUniqueValues([-1,-1,-2,-2,-3,-4,1]) //output 5
//countUniqueValues([]) //output 0
//countUniqueValues([1]) //output 1