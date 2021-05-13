//anagram is a word derived from another word2 by using the letters in side the word2 alone
//frquency
function isAnagram(str1,str2){
    // create two objects for frequncy counting 
    let frequncyCounter = {};
    
    // loop over the first string
    for(let i=0;i<str1.length;i++){
        let char = str1[i];
        frequncyCounter[char] = (frequncyCounter[char] || 0)+1;
    }

    //loop over the second string
    for(let i=0;i<str2.length;i++){
        let char = str2[i];
        if(!frequncyCounter[char]) {//return true if count is eual to 0 or there is no entry
            return false;
        }else{
            frequncyCounter[char]-=1;//CLAPS we can simply decrease the count 
        }
    }
    
    return true;
}

isAnagram("anagram","nagaram");
/*
//isAnagram("","") //true
//isAnagram("sreeni","nirese") //true
//isAnagram("sreeni","vasulu") //false
//isAnagram("iceman","cinema") //true
//isAnagram("rat","car")//*/