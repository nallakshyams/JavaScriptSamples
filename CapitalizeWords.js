function capitalizedWords (arr) {
    if(arr.length === 1) return [arr[0].toUpperCase()];
    return [arr[0].toUpperCase()].concat(capitalizedWords(arr.slice(1)));
    return arr;
}

 let words = ['i', 'am', 'learning', 'recursion'];
 capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']