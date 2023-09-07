document.addEventListener("DOMContentLoaded", function () {
  var respuesta = document.getElementById("respuesta");
  var metraje = document.getElementById("metraje");
  metraje.value = 0;
  respuesta.textContent = 0 + " soless";
  var valores = {
    1: 4.4,
    2: 10,
    3: 6.4,
    4: 1.2,
    5: 4.17,
  };

  // Función para calcular el costo y actualizar el campo de entrada respuesta
  function calcularCosto() {
    var valorSeleccionado = micombobox.value;
    var costo = valores[valorSeleccionado];
    respuesta.textContent =
      Math.ceil(metraje.value * costo * 10) / 10 + " soles";
  }

  // Agrega un evento input al campo de entrada metraje para detectar cuando el usuario cambia su valor
  metraje.addEventListener("input", calcularCosto);

  // Agrega un evento change al combobox para detectar cuando el usuario selecciona una opción
  micombobox.addEventListener("change", calcularCosto);
});
