// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
const add =(array, bookName)=> {
  let x1 = [...array];
  let x3 = x1.push(bookName)
  console.log(x3);
  return x3;
  // Change code above this line
}
// Change code below this line
const remove=(arrayOther, bookName)=>{
    let arr1=  arrayOther;
    console.log(arr1);
    // Change code above this line
    
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
console.log(newBookList);