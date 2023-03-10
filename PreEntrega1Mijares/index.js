alert('Bienvenido a la calculadora de propinas!');

const cuenta = prompt('Ingresa el monto total: ');
const porcentaje = prompt('Ingresa el porcentaje de propina deseado a dejar: ');
const propina = (porcentaje * cuenta) / 100;

alert(
  'La propina a pagar es un total de: ' + parseInt(propina).toFixed(2) + '$.'
);
const pregunta = prompt('Desea dividir la propina por persona? (si o no): ');

if (pregunta === 'si') {
  const personas = prompt('Entre cuantas personas desea dividir la propina?: ');
  function operacion() {
    propinaFinal = propina / personas;
    alert('Su total a pagar POR PERSONA es: ' + propinaFinal.toFixed(2) + '$.');
  }
  operacion();
} else {
  alert('Su total a pagar es: ' + propina + '$.');
}

console.log(typeof propina);

