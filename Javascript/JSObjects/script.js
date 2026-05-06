// let fd=[
//     ["RajVardhan","18-11-1997","123456789","Bhopal","Teacher"],
//      ["PranayDas","18-11-1997","123456789","Bhopal","Teacher"],
//       ["Mohitpayasi","18-11-1997","123456789","Bhopal","Teacher"],
//        ["Arun","18-11-1997","123456789","Bhopal","Teacher"],
// ]
// fd.forEach((element) => {
//      console.log(element);
// });
// let fData=[
//   {
//     "name": "Aman Patel",
//     "city": "Bhopal",
//     "phone": "9876543210",
//     "profession": "Software Engineer"
//   },
//   {
//     "name": "Riya Sharma",
//     "city": "Indore",
//     "phone": "9123456780",
//     "profession": "Doctor"
//   },
//   {
//     "name": "Rahul Verma",
//     "city": "Delhi",
//     "phone": "9988776655",
//     "profession": "Teacher"
//   },
//   {
//     "name": "Sneha Gupta",
//     "city": "Mumbai",
//     "phone": "9090909090",
//     "profession": "Designer"
//   },
//   {
//     "name": "Karan Singh",
//     "city": "Pune",
//     "phone": "9871234567",
//     "profession": "Photographer"
//   }
// ]
// fData.forEach((item) => {
// console.log(item);
//      console.log(item["phone"]);
// });
// fData.map((element,idx)=>
// {
//     console.log(idx);
// })
// console.log(fData);
// console.log(fData[1]["name"]);//Bracket Notation
// console.log(fData[1].phone);//Dot Notattion
// let vishal={
//     "name": "Karan Singh",
//     "city": "Pune",
//     "phone": "9871234567",
//     "profession": "Photographer"
// };
// console.log(Object.keys(vishal));
// console.log(Object.values(vishal));
// console.log(Object.entries(vishal));
// let ar=[22,43,6,74,8,91,5,23,32,92,53,93,7,6];
// ar.sort((a,b)=>a-b);//Compair Function
// console.log(ar);
// console.log(ar.find((val)=>val>20));//Single Search
// console.log(ar.find((val)=>val===6));
// console.log(ar.findIndex((val)=>val===6));
// console.log(ar.findLastIndex((val)=>val===6));
// let ar2=[22,43,6,74,8,91,5,23,32,92,53,93,7,6];

// console.log(ar2.filter((val)=>val>20));//Multi Search
// console.log(ar2.slice(0,7));

let ab="This is Web-Development Class"
{
    console.log(ab);
    console.log(ab.split(" "));
    console.log(ab.split("-"));
}
