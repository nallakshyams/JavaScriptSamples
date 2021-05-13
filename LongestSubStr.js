//Undertood this scaling window pattern
function findLongestSubstring(str) {// logest sub str lenghth with distinct chars scaling window
  let longest = 0;
  let obj = {};
  let index = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char] && obj[char] > index) {//you can find very old char which comes initially also so you can put max
      index = obj[char];
    }
    // index - beginning of substring + 1 (to include current in count)
    //longest = Math.max(longest, i - index + 1);
    if(i-index+1 > longest){
        longest = i-index+1;
    }
    // store the index of the next char so as to not double count
    obj[char] = i + 1;
  }
  return longest;
}
findLongestSubstring('rithmschoabcdefgijk') //op 12
//findLongestSubstring('bbbbb') //op 1
//findLongestSubstring('') //op 0
//findLongestSubstring('rithmschoool') //op 7