document.addEventListener("DOMContentLoaded", function () {
  var respuesta = document.getElementById("respuesta");
  var metraje = document.getElementById("metraje");
  var micombobox = document.getElementById("micombobox");
  var gananciaxmetro = document.getElementById("gananciaxmetro");

  metraje.value = 0;
  metraje.focus();
  respuesta.textContent = 0 + " soles";
  respuestaxventa.textContent = 0 + " soles";
  gananciaxmetro.textContent = 0 + " soles";
  var valores = {
    1: 4.4,
    2: 10,
    3: 6.4,
    4: 1.2,
    5: 4.17,
    6: 10,
    7: 12,
    8: 15,
  };

  var valoresxventa = {
    1: 15,
    2: 20,
    3: 20,
    4: 7,
    5: 10,
    6: 40,
    7: 50,
    8: 60,
  };
  var opciones = [
    "Vinil Gloss",
    "Vinil Reflectivo",
    "Vinil Cromado",
    "Polarizado Económico",
    "Polarizado DRS",
    "Fibra de Carbono 3D Negro",
    "Fibra de Carbono 4D Negro",
    "Vinil Panorámico",
  ];
  for (var i = 0; i < opciones.length; i++) {
    var opcion = document.createElement("option");
    opcion.text = opciones[i];
    opcion.value = i + 1; // Asigna el índice + 1 como valor de la opción
    micombobox.appendChild(opcion);
  }
  // Función para calcular el costo y actualizar el campo de entrada respuesta
  function calcularCosto() {
    var valorSeleccionado = micombobox.value;
    var costo = valores[valorSeleccionado];
    var costoxventa = valoresxventa[valorSeleccionado];

    respuesta.textContent =
      Math.ceil(metraje.value * costo * 10) / 10 + " soles";
    respuestaxventa.textContent =
      Math.ceil(metraje.value * costoxventa * 10) / 10 + " soles";
    gananciaxmetro.textContent =
      parseFloat(respuestaxventa.textContent) -
      parseFloat(respuesta.textContent) +
      " soles";
  }

  // Agrega un evento input al campo de entrada metraje para detectar cuando el usuario cambia su valor
  metraje.addEventListener("input", calcularCosto);

  // Agrega un evento change al combobox para detectar cuando el usuario selecciona una opción
  micombobox.addEventListener("change", calcularCosto);
});
