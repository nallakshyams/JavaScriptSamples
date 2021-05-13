//devide and con
function averagePair(arr,target){//ip :arr of sroted numbers pr:find avg  with  numbers inside array macthes with target
    //return if array length is less than or equals to 1
    if(arr.length <=1)return false;
  //declare min max pointers
    let min=0,max=arr.length-1,avg = null;
  //loop over
  while(min < max){
      avg = (arr[min]+arr[max])/2;
      if(avg === target) return true;
      if(avg < target){
          min++;
      }else{
          max--;
      }
  }
  return false;
}

//averagePair([1,2,3,4], 2.5) //op true
//averagePair([1,2,3,4], 2.1) //op false
//averagePair([], 2) //op false
averagePair([-2,-1,1,2,3,4,8,12], 4.5) //op true