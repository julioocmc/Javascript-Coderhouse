// ------------Segunda Entrega -----------
alert('Bienvenido! Este es nuestro menu sugerido: ' + JSON.stringify(comidas));
document.write(JSON.stringify(comidas));
let tipo = prompt('Desea organizar su desayuno, almuerzo o cena?: ');
let contorno = prompt('Que desea como contorno en su comida?: ');
let proteina = prompt('Que desea como proteina en su comida?: ');
let bebida = prompt('Que desea beber?: ');
let extra = prompt('Desea algo adicional en su plato?: ');
let postre = prompt('Desea algun postre?: (si o no)');

const datos = {
  tipo: tipo,
  contorno: contorno,
  proteina: proteina,
  bebida: bebida,
  extra: extra,
  postre: postre,
};

function ordenarComida(comidas) {
  comidas.forEach((comida) => {
    console.log(comida.tipo + ' ' + comida.bebida);
  });
}

function noOrdenarComida() {
  console.log('Esperamos que vuelva pronto :)');
}

function pedidoTipo(comida) {
  if (datos.tipo) {
    return comida.tipo === datos.tipo;
  }
  return comida;
}

function pedidoContorno(comida) {
  if (datos.contorno) {
    return comida.contorno === datos.contorno;
  }
  return comida;
}

function pedidoProteina(comida) {
  if (datos.proteina) {
    return comida.proteina === datos.proteina;
  }
  return comida;
}

function pedidoBebida(comida) {
  if (datos.bebida) {
    return comida.bebida === datos.bebida;
  }
  return comida;
}

function pedidoExtra(comida) {
  if (datos.extra) {
    return comida.extra === datos.extra;
  }
  return comida;
}

function pedidoPostre(comida) {
  if (datos.postre) {
    return comida.postre === datos.postre;
  }
  return comida;
}

function pedido() {
  let orden = comidas
    .filter(pedidoTipo)
    .filter(pedidoBebida)
    .filter(pedidoContorno)
    .filter(pedidoExtra)
    .filter(pedidoProteina)
    .filter(pedidoPostre);
  //console.log(orden);
  if (orden.length) {
    ordenarComida(orden);
  } else {
    noOrdenarComida();
  }
}
function ordenarPostre() {
  let dulce = prompt('Que postre desea?: ');
  alert(`Que disfrute su ${dulce} :)`);
}
if (postre === 'si') {
  ordenarPostre();
} else {
  alert('Una pena! Hasta luego :)');
}

pedido();
document.write(
  '<b>Este es su pedido: </b>' +
    JSON.stringify(datos) +
    ' ' +
    '<b>, que tenga un buen provecho :)</b>'
);
