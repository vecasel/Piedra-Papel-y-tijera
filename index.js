function resultadoJuego(print, selectionPlayerOne, selectionPlayerTwo){

    var selectionPlayerOne = document.getElementById("j1").value;
    var selectionPlayerTwo = document.getElementById("j2").value;

if (selectionPlayerOne == "tijera" && selectionPlayerTwo == "papel"){    
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 1";
}
else if(selectionPlayerOne == "tijera" && selectionPlayerTwo == "tijera"){
    var printContents = document.getElementById('print').innerHTML="Empate";
}
else if(selectionPlayerOne == "tijera" && selectionPlayerTwo == "piedra"){
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 2";
}
else if(selectionPlayerOne == "papel" && selectionPlayerTwo == "tijera"){
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 2";
}
else if(selectionPlayerOne == "papel" && selectionPlayerTwo == "papel"){
    var printContents = document.getElementById('print').innerHTML="Empate";
}
else if(selectionPlayerOne == "papel" && selectionPlayerTwo == "piedra"){
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 1";
}
else if(selectionPlayerOne == "piedra" && selectionPlayerTwo == "tijera"){
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 1";
}
else if(selectionPlayerOne == "piedra" && selectionPlayerTwo == "piedra"){
    var printContents = document.getElementById('print').innerHTML="Empate";
}
else if(selectionPlayerOne == "piedra" && selectionPlayerTwo == "papel"){
    var printContents = document.getElementById('print').innerHTML="Ganó el jugador 2";
}
else{
    var printContents = document.getElementById('print').innerHTML="Debe escribir las palabras correctas";
}
}
