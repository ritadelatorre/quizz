


let posicion = 0;
document.getElementById("num_preguntas").innerHTML = NUM_PREGUNTAS;
mostrarPregunta();


function mostrarPregunta(){
   document.getElementById("pregunta").innerHTML = preguntas[posicion];
}

function verificar() {
   
   let optA = document.getElementById("opA");
   let optB = document.getElementById("opB");
   let optC = document.getElementById("opC");
   let optD = document.getElementById("opD");

   
   let puntos = 0;
   if (optA.checked) {
      puntos += Number(optA.value);
   }
   if (optB.checked) {
      puntos += Number(optB.value);
   }
   if (optC.checked) {
      puntos += Number(optC.value);
   }
   if (optD.checked) {
      puntos += Number(optD.value);
   }
   puntos = (puntos >= 0.85) ? 1 : puntos;
   
   preguntas[posicion].setPuntos(puntos);

}

function mostrarPuntos() {
   verificar();
   document.getElementById("correcta").innerHTML = preguntas[posicion].mostrarCorrecta();
   document.getElementById("correcta").style.display="block";
   document.getElementById("ptos").innerHTML = preguntas[posicion].getPuntos();
   document.getElementById("puntos").style.display="block";
}

function ocultarRespuesta() {
   document.getElementById("correcta").style.display="none";
   document.getElementById("puntos").style.display="none";
   document.getElementById("interpreta").style.display="none";
}

function siguiente() {
   verificar();
   ocultarRespuesta();
   posicion++;
   if (posicion >= NUM_PREGUNTAS) {
      posicion = NUM_PREGUNTAS-1;
      alert("Has llegado al final del test.\nPresiona ENTER para ver tus resultados.");
      resultado();
   } else {
      mostrarPregunta();
   }
}

function resultado() {
   verificar();
   let total = 0;
   for (let i = 0; i< NUM_PREGUNTAS; i++) {
      total += Number(preguntas[i].puntos);
   }

   console.log("Total: " , total);
   document.getElementById("interpreta").style.display="block";
   document.getElementById("totalTest").innerHTML=
      `Has obtenido <b>${total} puntos</b> sobre <b>${NUM_PREGUNTAS}</b>.`;

}