// merge sorted arrays:compare first with first and so on finally eremaining elements in the arr should move to newarr 
function merge(arr1,arr2){
    var newArr = [],i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <= arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }else{
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length)//CLAPS for this idea to reuse i and j for looping
    {
        newArr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length)
    {
        newArr.push(arr2[j]);
        j++;
    }
    
    return newArr;
}
function mergeSort(arr){
    if(arr.length === 1) return arr;
    var mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));//you will land if more than one element in the arr
    let right = mergeSort(arr.slice(mid));//you will land if more than one element in the arr
    return merge(left, right);//you will land if more than one element in the arr
}
/*step0*/mergeSort([10,24,76,73])

// left  = mergeSort([10,24])     ,                    // right = mergeSort([76,73]) 
//left = mergeSort([10]), right = mergeSort([24])     //left = mergeSort([76]), right = mergeSort([73]) 
//left =[10] , right = [24]  //no merge                  //left = [76] , right = [73]// no merge
//merge([10],[24]) thisis for step1 =>[10,14]                        //merge([76],[73]) => [73,76]
//merge([10,24], [73,76])//becuase of step 0 