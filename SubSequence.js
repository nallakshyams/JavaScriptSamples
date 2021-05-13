//multi pointers
function isSubsequence(str1,str2) {//input would be 2 strs where 1st should be appeared in second in the same order (may not be consecutive)
  //str empty check and length check
    if(!str1) return true;
    //if(str1.length > str2.length) return false;
    
  //delcare 2 pointers starts from 0
  let ptr1 = 0, ptr2 = 0;
  while(ptr2 < str2.length){
    if(str1[ptr1] === str2[ptr2]){
       ptr1++;
    }
    if(ptr1===str1.length){//***clap
      return true;
    } 
    ptr2++;
  }
  return false;
}

//isSubsequence('abc','abracadabra') //op true
isSubsequence('hello','hello world') //op true
//isSubsequence('abc','acd') //op false
//isSubsequence('abc','def') //op false
