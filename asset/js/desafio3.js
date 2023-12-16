function password(){
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let select3 = document.getElementById("select3").value;
    let msg = document.getElementById("msg");

    let pass = select1 + select2 + select3;
    console.log(pass)
    if (pass == "911"){
        msg.classList.remove("incorrecto")
        msg.classList.add("correcto")
        msg.innerHTML = "Password 1 Correcto!"
    }
    else if (pass == "714"){
        msg.classList.remove("incorrecto")
        msg.classList.add("correcto")
        msg.innerHTML = "Password 2 Correcto!";
    }
    else {
        msg.classList.remove("correcto")
        msg.classList.add("incorrecto")
        msg.innerHTML = "¡Password Incorrecto!";
    }
}