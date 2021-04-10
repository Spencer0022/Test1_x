const switcheroo=(string)=>{

    let x1 = string.split("");
    console.log(x1);
    for (let i=0;i<x1.length;i++){
        if (x1[i] == 'a'){
            x1[i]='b';
        } else if (x1[i] == 'b'){
            x1[i] = 'a';
        }
    }
    x1.join("");
    return x1;


};


let x2= switcheroo('aaabcccbaaa');
console.log(x2);