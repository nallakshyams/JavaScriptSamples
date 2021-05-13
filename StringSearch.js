/*function stringSearch(str,pattern){
    var ptr1 = 0, ptr2 = 0,count = 0;
    while(ptr1 < str.length){
        if(str[ptr1] == pattern[ptr2]){
            if(ptr2 == pattern.length -1){
                ptr2 = 0;
                ++count;
            }else{
                ptr2++;
            }
        }else{
            ptr2 = 0;
        }
        ptr1++;
    }
    return count;
}*/

//stringSearch("hey ha hi ha","ha") //op 2
stringSearch("wowomgzomg","omg") //op 2
function stringSearch(str,pattern){
    let count = 0;
    for(let i=0; i<str.length;i++){
        for(let j=0;j<pattern.length;j++){
            if(str[i+j] !== pattern[j]) break; //CLAPS for i+J
            else if(j === pattern.length-1) count++; 
        }
    }
    return count;
}