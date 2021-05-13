function addSumOfConseNumbers(arr,n){//find biggest sum of cons n num in an array
    //return undefined incase arr length is less than n or array length is zero
    if(arr.length === 0 || arr.length < n || n===0){
        return undefined;
    }
    //decalre a variable which will hold the initial sum
    let sum = 0;
    //loop over the arr to find initial sum
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
    let temp = 0;
    for(let i=0;i<arr.length-n;i++){
        temp = sum-arr[i]+arr[i+n];
        sum = Math.max(temp,sum);
    }
    return sum;

}
addSumOfConseNumbers([1,5,3,2,8,9],3) //output 19
//addSumOfConseNumbers([1,5,3,2],5) //output undefined
//addSumOfConseNumbers([1,2,3],0) //output undefined
//addSumOfConseNumbers([1,2,3],1) //output 3
//addSumOfConseNumbers([1,2,3],2) //output 5

