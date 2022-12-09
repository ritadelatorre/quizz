const $select = document.querySelector("#miSelect");
const tests = ["excel", "bbdd", ];
   
for (let i=0; i<tests.length; i++) {
      const option = document.createElement('option');
      option.value = tests[i] + ".js";
      option.text = tests[i];
      $select.appendChild(option);
}

const mostrar = () => {
   const indice = $select.selectedIndex;
   if(indice === -1) return; // Esto es cuando no hay elementos
   const opcionSeleccionada = $select.options[indice];
   alert(`Texto: ${opcionSeleccionada.text}. Valor: ${opcionSeleccionada.value}`);
}

function comenzar() {
   const indice = $select.selectedIndex;
   const opcionSeleccionada = $select.options[indice];
   document.getElementById("script1").src = opcionSeleccionada.value;
   alert(document.getElementById("script1").src);
}
