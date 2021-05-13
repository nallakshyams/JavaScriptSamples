//***********Dint understand this scaling window
function minSubArrayLen(nums,sum){
    // arr of +ve numbers plus n is the input ..min no of consecutive ele's addition should be greater than or eqiul to n 
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < nums.length) {
    if(total < sum && end < nums.length){// if current window doesn't add up to the given sum then  move the window to right
      total += nums[end];
	  end++;
    }
    else if(total >= sum){ // if current window adds up to at least the sum given then we can shrink the window 
      minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
    }else{
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
//minSubArrayLen([1,2,3,4,6,5],11) //op 2
//minSubArrayLen([1,2,3,4,5,6],155) //op 0
//minSubArrayLen([1,2,3,4,5,6],5) //op 1
//minSubArrayLen([],5) //op 0
//minSubArrayLen([1,2,3],null) //op 0