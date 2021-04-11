Array.prototype.myMap=function(callback){
    let newArray=[];
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i]));
    }

    return newArray;

};
var x = [23, 65, 98, 5];

var x2 = x.myMap(item=>item*2);

console.log(x2);