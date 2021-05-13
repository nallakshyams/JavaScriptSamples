function sameFrequency(num1, num2){
  //convert numbers to array and declare objects to capture frequency
  let arr1 = Array.from(String(num1)), arr2 = Array.from(String(num2)), frequencyCount={};
  //count each character frequency in arr1
  for(let i=0;i<arr1.length;i++){
      frequencyCount[arr1[i]] = (frequencyCount[arr1[i]]||0)+1;
  }
  for(let i=0;i<arr2.length;i++){
      if(!frequencyCount[arr2[i]]){
          return false;
      }else{
          frequencyCount[arr2[i]]--;
      }
  }
  return true;

}
//sameFrequency(123, 321) //true
//sameFrequency(123, 320) //false