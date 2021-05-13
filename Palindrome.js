
function isPalindrome(str){
  function reverseStr(inputStr){
      if(inputStr.length === 1) return inputStr;
      return reverseStr(inputStr.slice(1))+inputStr[0];
  }
  return str === reverseStr(str);
}

//isPalindrome('awesome') // false
 //isPalindrome('foobar') // false
 // isPalindrome('tacocat') // true
//isPalindrome('amanaplanacanalpanama') // true
 //isPalindrome('amanaplanacanalpandemonium') // false
