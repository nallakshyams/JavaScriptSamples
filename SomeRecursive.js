
function someRecursive(arr,callBack){
  if(arr.length === 0) return false;
  return  callBack(arr[0]) || someRecursive(arr.slice(1),callBack) ;
}
function callBackFunc(val){
  return val % 2 !== 0;
}


// SAMPLE INPUT / OUTPUT

 someRecursive([1,2,3,4], callBackFunc) // true
// someRecursive([4,6,8,9], callBackFunc) // true
 //someRecursive([4,6,8], callBackFunc) // false
 //someRecursive([4,6,8], val => val > 10); // false