class HashTable{
    constructor(size = 4){//hashValue will be index inside an array
        this.keyMap = new Array(size) ;
    }
    hash(key){//key will be a string for now
        var total = 0;
        var strangePrime = 31;
        for(var i=0;i<Math.min(key.length,100);i++){
            var currentChar = key.charCodeAt(i) -96;
            total = (total*strangePrime+currentChar) % this.keyMap.length;
        }
        return total;        
    }
    set(key,val){//ideally we need to see whether there is a key with the same name present or not and override if present
        var index = this.hash(key);
        if(!this.keyMap[index])this.keyMap[index] = [];
        this.keyMap[index].push([key,val]);
    }
    get(key){
        var index = this.hash(key);
        if(this.keyMap[index]){
            for(let i=0;i<this.keyMap[index].length;i++){
                if(keyMap[i][0] === key)return keyMap[i][1];//value
            }
        }
        return undefined;
    }
    values(){
        var values = [];
        for(let i=0;i<this.keyMap.length;i++){
            var currentItem = this.keyMap[i];
            if(!currentItem) continue;
            for(let j=0;j<currentItem.length;j++){
                if(!values.includes(currentItem[j][1])) values.push(currentItem[j][1]);
            }
        }
        return values;
    }
     keys(){
        var keys = [];
        for(let i=0;i<this.keyMap.length;i++){
            var currentItem = this.keyMap[i];
            if(!currentItem) continue;
            for(let j=0;j<currentItem.length;j++){
                if(!keys.includes(currentItem[j][0])) keys.push(currentItem[j][0]);
            }
        }
        return keys;
    }
}
var hashTable = new HashTable();
hashTable.set("hello world","bla bala");
hashTable.set("dogs","goggys");
hashTable.set("i love","pizza");
hashTable.set("cats","may become tigers");
hashTable.set("i sad","pizza");

