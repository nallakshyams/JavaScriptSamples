function nestedEvenSum(obj) {
  var sumOfEvenNumbers = 0;
  for(var key in obj){
      if(isObject(obj[key])){
        sumOfEvenNumbers+=nestedEvenSum(obj[key]);//CLAPS for this step 0+0+final wil be added to first declrared sum variable
      }else if(typeof(obj[key]) === "number" && obj[key]%2 ===0){
        sumOfEvenNumbers+=obj[key];
      }
  }
  return sumOfEvenNumbers;
}
function isObject(o) {
  return o !== null && typeof o === 'object' && Array.isArray(o) === false;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}


var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

//nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
