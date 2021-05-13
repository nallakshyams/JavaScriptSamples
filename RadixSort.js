// we will have 0-9 buckets and based on last digit of the number we will move the nums to approporiate bucket
//Helper methods start
function getDigit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
}

function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++){
        maxDigits = Math.max(digitCount(nums[i]),maxDigits);
    }
    return maxDigits;

}
//Helper methods end

function radixSort(arr){
    var maxDigits = mostDigits(arr);
    for(let i=0;i<maxDigits;i++){//KEY
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let j=0;j<arr.length;j++){
            digitBuckets[getDigit(arr[j],i)].push(arr[j]);
        }
        arr = [];
        for(let j=0;j<10;j++){
            arr = arr.concat(digitBuckets[j]);
        }
    }
    return arr;
}

//radixSort([10,0,5,4,3,2,1]) //op [1,2,3,4,5]
//radixSort([1,2,3,4,5]) //op [1,2,3,4,5]
radixSort([1,1,2,2,3,3]) //op [1,2,3,4,5]
