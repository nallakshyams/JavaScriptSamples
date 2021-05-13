//frequencyCounter
/*function areThereDuplicates() {
  // capture arguments in to array
  if(arguments.length<=1) return false;
  //declare frequency counter and loop over
  let frequencyCounter = {};
  for(let i=0;i<arguments.length;i++){
      frequencyCounter[arguments[i]] = (frequencyCounter[arguments[i]] || 0)+1;
      if(frequencyCounter[arguments[i]] > 1) return true
  }
  return false;
}*/

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
//areThereDuplicates(1,2,3) //op false
//areThereDuplicates(1,2,2) //op true
//areThereDuplicates('a','b','c','a') //op true
//areThereDuplicates('a','b','c') //op false