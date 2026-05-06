// let arr=[12,23,45,67,78,12];//Create
// for(var i=0;i<7;i++)//Read
// {
//     console.log(arr[i]);
// }
// console.log(arr);
// arr[2]=arr[2]+10;//Update
// console.log(arr);
// arr=[];//Delete
// console.log(arr);
// let arr=[12,23,34,45,56,67,78,89,90];
// console.log(arr);
// arr.push(99);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(11);//Add From First
// console.log(arr);
// arr.shift();//Remove From First
// console.log(arr);
// console.log(arr.at(0));
// console.log(arr.indexOf(78));
// console.log(arr.includes(89));
// console.log(arr.indexOf(89));
// let unar=[56,23,89,45,67,34,12,90,87,45,98];
// console.log(unar);
// unar.sort();
// console.log(unar);
// unar.reverse();
// console.log(unar);
let ar = [12, 23, 45, 67, 78, 12];
for (
  var i = 0;
  i < 7;
  i++ //Read
) {
  console.log(ar[i]);
}
console.log("For each Loop");
ar.forEach((element) => {
  console.log(element);
});
