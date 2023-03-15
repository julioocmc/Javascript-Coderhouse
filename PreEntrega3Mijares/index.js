//-----------Tercera Entrega--------

const listaClientes = document.querySelector('#lista-clientes');
const formulario = document.querySelector('#formulario');

let clientes = [];

document.addEventListener('DOMContentLoaded', () => {
  if (JSON.parse(localStorage.getItem('clientes')) == 'null') {
    clientes = [];
  } else {
    clientes = JSON.parse(localStorage.getItem('clientes'));
  }
  render();
  document.querySelectorAll('#lista-clientes p a');
});

const resetHTML = () => {
  while (listaClientes.firstChild) {
    listaClientes.removeChild(listaClientes.firstChild);
  }
};

const sincronizarStorage = () => {
  localStorage.setItem('clientes', JSON.stringify(clientes));
};

const render = () => {
  resetHTML();

  if (clientes.length > 0) {
    clientes.forEach((cliente) => {
      const btnDelete = document.createElement('a');
      btnDelete.classList = 'borrar-nombre';
      btnDelete.textContent = '❌';
      const p = document.createElement('p');
      p.textContent = cliente.nombre;
      p.id = cliente.id;
      p.appendChild(btnDelete);
      listaClientes.appendChild(p);
    });
  }

  sincronizarStorage();
};

const agregarCliente = (evt) => {
  evt.preventDefault();

  const cliente = document.querySelector('#cliente').value;
  console.log(cliente);
  if (cliente.length <= 2) {
    alert('Debe escribir el nombre completo, intente de nuevo ');
    return;
  }

  const clienteObj = {
    id: Date.now(),
    nombre: cliente,
  };
  clientes.push(clienteObj);

  render();

  formulario.reset();
};

const borrarCliente = (evt) => {
  evt.preventDefault();
  let id = evt.target.parentElement.id;
  clientes = clientes.filter((cliente) => cliente.id != id);
  render();
};

formulario.addEventListener('submit', agregarCliente);
listaClientes.addEventListener('click', borrarCliente);
