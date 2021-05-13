//multip pointer pattern partly sliding window or devide and con
function sumZeroFirstPair(arr){ // input would be sorted numbers
   
    //declare the pointers
    let ptr1 =0, ptr2 = arr.length -1;
    //loop over 
    while(ptr1 < ptr2){
        let sum = arr[ptr1] + arr[ptr2];
        if(sum === 0){
            return [arr[ptr1] , arr[ptr2]]
        }else if(sum > 0){
            ptr2--;
        }else if(sum < 0){
            ptr1++;
        }
    }
    return undefined
}

//sumZeroFirstPair([-3,-2,-1,0,1,2,3]) //-output is [-3,3]
//sumZeroFirstPair([-3,-2,-1,0]) //-output is undfined
//sumZeroFirstPair([0,1,2,3]) //-output is undfined
//sumZeroFirstPair([]) //-output is undfined
sumZeroFirstPair([-3,-2,-1,0,1,2]) //-output is [-3,3]