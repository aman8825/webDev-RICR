//Function Expression
let abc = function () {
  console.log("Hello World");
};

console.log(abc); // abc is callback function
abc(); //function call
const abcd = function () {
  console.log("Hello World");
};
//----------Arrow Function-------------
const abcde = () => {
  console.log("I am Arrow Function");
};
abcde();

// const addarrow=(a,b)=>{
//     return a+b;
// }
// console.log(addarrow(5,6))
const addarrow = (a, b) => a + b;

console.log(addarrow(6, 6));
