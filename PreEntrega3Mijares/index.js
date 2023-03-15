//-----------Tercera Entrega--------
let input = document.getElementsByClassName('form_item');
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('keyup', function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('pin');
    } else {
      this.nextElementSibling.classList.remove('pin');
    }
  });
}
