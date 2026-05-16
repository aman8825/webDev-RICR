localStorage.setItem("userName","Rahul");
console.log(localStorage.getItem("userName"));

localStorage.setItem("theme","dark");
console.log(localStorage.getItem("theme"));

localStorage.setItem("city","Mumbai");
console.log(localStorage.getItem("city"));

function clearAll(){
    localStorage.clear();
}
const UserData={
    name:"Rahul",
    age:"22"
};
localStorage.setItem("userData",JSON.stringify(UserData));
const data=JSON.parse(localStorage.getItem("userData"));
console.log(data.name);
console.log(data.age);

const da={
    username:"Amit", 
    theme: "light"
}
localStorage.setItem("user",JSON.stringify(da));
const Data=JSON.parse(localStorage.getItem("user"));
console.log(Data.username);
console.log(Data.theme);