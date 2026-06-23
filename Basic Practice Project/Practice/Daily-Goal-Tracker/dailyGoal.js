function addGoal() {
  const newGoal = document.getElementById("newGoal").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");
  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center", "gap-5");
  const SP1 = document.createElement("span");
  SP1.innerText = newGoal;
  const BTN = document.createElement("button");
  BTN.classList.add(
  "btn",
  "bg-danger",
  "d-flex",
  "gap-3",
  "align-items-center",
  "justify-content-center",
  "text-white",
  "rounded-2"
  

);
  BTN.onclick = () => LI.remove();
  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");
  const SP2 = document.createElement("span");
  SP2.innerText = "Delete";
 const DIV2=document.createElement("div");
 DIV2=
  
   BTN.appendChild(I);
   BTN.appendChild(SP2);
  
  DIV.appendChild(SP1);
  DIV.appendChild(BTN);
  LI.appendChild(DIV);

  document.getElementById("taskDiv").classList.remove("d-none");
  document.getElementById("taskList").appendChild(LI);
  document.getElementById("newGoal").value = "";
}
