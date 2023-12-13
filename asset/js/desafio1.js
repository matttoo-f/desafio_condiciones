function changeBorder(){ //la estoy creando
   const img = document.getElementById("img-b");

   const validation = img.classList.contains("img-js")
    if (validation == false){
       img.classList.add("img-js")
    } else {
       img.classList.remove("img-js")
    }
}

function borderRadius(){
   const img = document.getElementById("img-b")
   const border = img.classList.contains("border-radius")
   if (border == false){
      img.classList.add("border-radius")
   }
}
function borderNone(){
   const img = document.getElementById("img-b")
   const border = img.classList.contains("border-radius")
   if (border == true){
      img.classList.remove("border-radius")
   }
}