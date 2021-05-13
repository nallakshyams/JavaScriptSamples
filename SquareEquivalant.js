//frequencyCounter 
function same(arr1, arr2){//ip 2 un sorted/ sorted arrays, need to find squares are found or not
   
    //compare length
    //check if they are not numbers inside array and if they are not arrays
    //take 2 objects and insert element count in each array
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for(let i of arr1){
        frequencyCounter1[i] = (frequencyCounter1[i] || 0)+1;
    }
    for(let i of arr2){
        frequencyCounter2[i] = (frequencyCounter2[i] || 0)+1;
    }
    //check if obj 1's key square is present in second object as a key

    //check the obj1 key count is equal to obj 2 key square count

    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key**2] ){
            return false;
        }
    }
    return true;

}

//same([1,1,2],[1,1,4]) //true
//same([1,1,2],[1,1]) //false
//same([1,1,2],[1,1,9]) //false
var a = performance.now();

var returnValue = same([1,2,3,2],[9,1,4,4]) //true
var b = performance.now();
var time = b-a;
console.log(returnValue+ " "+time/1000);

