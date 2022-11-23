function bandera(){
    let num = document.getElementById('opc').value;
    if (num == 1){
    document.getElementById("ejercicio1").style.display = "block";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (num == 2){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "block";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (num == 3){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "block";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (num == 4){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "block";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (num == 5){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "block";
    }
}