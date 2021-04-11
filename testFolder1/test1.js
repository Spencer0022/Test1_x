var s = [23, 65, 98, 5];


Array.prototype.myMap = function(doop) {


  var newArray = [];



  // Only change code below this line

    for (let i=0;i<this.length;i++){

        newArray.push(doop(this[i]));

    }

  // Only change code above this line

    console.log(newArray);

  return newArray;

};

var new_s = s.myMap(item=>item*2);