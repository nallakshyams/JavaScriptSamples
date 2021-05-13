function collectStrings(obj){
   var arr = [];
   for(var key in obj){
       if(typeof(obj[key]) === "string"){
           arr.push(obj[key]);
       }else if(null!==obj[key] && typeof(obj[key])==="object" && !Array.isArray(obj[key])){
           arr = arr.concat(collectStrings(obj[key]));
       }
   } 
   return arr;
}
var obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj1) // ["foo", "bar", "baz"])