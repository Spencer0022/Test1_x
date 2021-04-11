Array.prototype.myMap=function(callback){
    let newArray=[];
    for(let i=0;i<callback.length;i++){
        newArray.push(callback(this[i]));
    }
    return newArray;
};

let x = [12,,3,4,5];
let newX = x.myMap(item=>item*2);
console.log(newX);
