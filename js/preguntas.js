class Pregunta {
   constructor(id, tipo, pregunta, imagen, 
      opcionA, valorA, opcionB, valorB, opcionC, valorC, opcionD, valorD, correcta, hint) {
		this.id = id;
      this.tipo = tipo; 
      this.pregunta = pregunta;
      this.imagen = imagen;
      this.opcionA = opcionA; 
      this.valorA = valorA; 
      this.opcionB = opcionB;
      this.valorB = valorB;
      this.opcionC = opcionC;
      this.valorC = valorC;
      this.opcionD = opcionD;
      this.valorD = valorD;
      this.correcta = correcta; 
      this.hint = hint;
      this.puntos = 0; 
   }

   setPuntos(puntos) {
      this.puntos = Number(puntos);
   }

   getPuntos() {
      return this.puntos;
   }

   mostrarCorrecta() {
      let mostrar = "";
      mostrar += "<p>Respuesta correcta: <strong>" + this.correcta + "</strong>.</p>";
      mostrar += "<p>" + this.hint + "</p>";
      return mostrar;
   }

   toString() {
      let mostrar=""; 
      mostrar +="<p>" + this.id + ". ";
      mostrar += this.pregunta +"</p>";

      mostrar += "<ol type='a'>";

      mostrar += "<li><input id='opA' name='respuesta' type='" + this.tipo + "'";
      mostrar += "value='" + this.valorA + "'/>";
      mostrar += "<span>" + this.opcionA +"</span></li>";

      mostrar += "<li><input id='opB' name='respuesta' type='" + this.tipo + "'";
      mostrar += "value='" + this.valorB + "'/>";
      mostrar += "<span>" + this.opcionB +"</span></li>";

      mostrar += "<li><input id='opC' name='respuesta' type='" + this.tipo + "'";
      mostrar += "value='" + this.valorC + "'/>";
      mostrar += "<span>" + this.opcionC +"</span></li>";

      mostrar += "<li><input id='opD' name='respuesta' type='" + this.tipo + "'";
      mostrar += "value='" + this.valorD + "'/>";
      mostrar += "<span>" + this.opcionD +"</span></li>";

      mostrar +="</ol>"

		return mostrar;
   }

}