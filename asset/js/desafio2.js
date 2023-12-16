function calcularStikers() {
    let input1 = parseInt(document.getElementById("input1").value)
    let input2 = parseInt(document.getElementById("input2").value)
    let input3 = parseInt(document.getElementById("input3").value)
    let msg = document.getElementById("msg")

    let suma = input1 + input2 + input3
console.log(suma)

    if (suma <= 10){
        msg.innerHTML = "Llevas " + suma + " Stikers."
    }
    else if (suma > 10){
        msg.innerHTML = "Llevas demacioados stikers!!"
    }
    else {
        msg.innerHTML = "Debes seleccionar una cantidad válida para cada stiker!!"
    }
console.log(msg)
}