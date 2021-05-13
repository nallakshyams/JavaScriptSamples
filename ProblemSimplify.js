function countChars(str){//simplification example on problem solving nothing specific
  //perform lowercase
  str = str.toLowerCase();
  //delcare object
  let countObj= {};
  //loop through the string
  //check if the character is alphanumeric
    //add the coount
  for(let i of str){
    if(!isAlphanumeric(i)){
      continue;
    }
    countObj[i] = (countObj[i] ||0)+1 //CLAPS which is a new thing to know
  }
  return countObj;

}
function isAlphanumeric(char){
  var code = char.charCodeAt(0);
  if((code > 47 && code < 58) ||
  (code > 64 && code < 91) ||
  (code > 96 && code < 123)) 
    return true;
  else
    return false

}

countChars("Hello hi!")