// ============= Nav Bar ============

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

// ========== Search Bar =========

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};

// ========== Form ==============

const form = document.querySelector('#order-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const requiredFields = form.querySelectorAll('[required]'); //validar
  let formIsValid = true;

  requiredFields.forEach((field) => {
    if (!field.value) {
      formIsValid = false;
      field.classList.add('invalid');
    } else {
      field.classList.remove('invalid');
    }
  });

  if (formIsValid) {
    Swal.fire({
      title: '¡Orden en proceso!',
      text: 'Tu orden está siendo procesada',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        form.submit();
      }
    });
  } else {
    Swal.fire({
      title: '¡Error!',
      text: 'Por favor, complete todos los campos obligatorios',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
});

// ===================== Weather ============

fetch(
  'https://api.weatherapi.com/v1/current.json?key=7165c9d76b084881b9764859233003&q=Caracas'
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('weather').textContent = `${data.current.temp_c}°C`;
  })
  .catch((error) => console.dir(error));
