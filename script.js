const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const btnMobile = document.getElementById('btn-mobile');
const menuText =document.getElementById('menu-text');

function writerMachine(texto, time) {
  const array = texto.innerHTML.split('');
  texto.innerHTML = '';
  array.forEach((letter, index) => setTimeout(() => texto.innerHTML += letter, time * index));
}

function toggleMenu (event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    menuText.innerText = 'Fechar';
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    menuText.innerText = 'Menu';
  }
}

writerMachine(h1, 60);
writerMachine(h2, 55);
writerMachine(h3, 25);
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

