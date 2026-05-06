let arr=[];
arr.push(12,23,34,56,78);
console.log(arr);
console.log(arr[0]);
console.log(find(23));
let users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

let user = users.find(u => u.id === 2);

console.log(user);
let user1=["Aman","Rahul","Priya"];
let users1=user1.filter(u=>u==="Aman");
console.log(users1);
let n=[];
n.push("Aman","Rahul");
console.log(n);
n[0]="Nayan";
console.log(n);
n[0]="";
console.log(n);
let a=["Aman","Nayan"];
console.log(a);
a[0]="Rahul";
console.log(a);
a[0]="";
console.log(a);