 document.getElementById("backgroundColor").addEventListener("change" ,ChangeBulbColor);
  document.getElementById("headingColor").addEventListener("change" ,ChangeBulbColor);
   document.getElementById("paragraphColor").addEventListener("change" ,ChangeBulbColor);


 function ChangeBulbColor(){
 const backgroundColor=  document.getElementById("backgroundColor").value;
 document.getElementById("leftContainer").style.backgroundColor=backgroundColor;
 const headingColor=  document.getElementById("headingColor").value;
 document.getElementById("heading").style.color= headingColor;
 const paragraphColor=  document.getElementById("paragraphColor").value;
 document.getElementById("paragraph").style.color=paragraphColor;

}
function reset(){
    window.location.reload();
}
