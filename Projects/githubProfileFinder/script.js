

async function search(){
    const user=document.getElementById("input").value;
    document.getElementById("input").value="";
   
    
const API_URL=`https://api.github.com/users/${user}`;
const response=await fetch(API_URL);
const data=await response.json();
console.log(data);
document.getElementById("img").src=data.avatar_url;
 document.getElementById("userName").innerText=data.login;
document.getElementById("name").innerText=data.name;
document.getElementById("bio").innerText=data.bio;
document.getElementById("location").innerHTML =
  `<i class="bi bi-geo-alt"></i> ${data.location || "Not available"}`;
document.getElementById("join").innerText ="Join:-"+
  new Date(data.created_at).toLocaleDateString("en-IN");
document.getElementById("lastUpdate").innerText="Last_Update:-"+ new Date(data.updated_at).toLocaleDateString("en-IN");  
document.getElementById("link").href=data.html_url;

}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.querySelector("input").classList.toggle("dark");

  document.querySelector(".main").classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerHTML = `<i class="bi bi-sun"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
  }
});