function stringifyNumbers(obj){
    for(var key in obj){
        if(obj[key]!== null && typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
            obj[key] = stringifyNumbers(obj[key]);
        }else if(typeof(obj[key]) === "number"){
            obj[key]+="";
        }
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/