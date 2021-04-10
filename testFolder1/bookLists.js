// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
const add =(array, bookName)=> {
  let x1 = [...array];
  x1.push(bookName);
  return x1;
  // Change code above this line
};
// Change code below this line
const remove=(arrayOther, bookName)=>{
    let newX = [...arrayOther];
    let IndexN1=newX.indexOf(bookName);
    if (newX.indexOf(bookName)>=0){
        newX.splice(IndexN1,1);
    } return newX;

    // Change code above this line

    
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);