//recursion which expects a number and returns sum 
function sumRange(num){
    //base condition
    if(num === 1) return 1;
    return num+sumRange(num-1);
    //recursive call
}
 sumRange(6) //op 10