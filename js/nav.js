// Desktop Nav

const main = document.querySelector('main');
const head_nav = document.querySelector('.head-nav');

const initialPos = main.getBoundingClientRect();

window.addEventListener('scroll', function() {
  if (window.pageYOffset > initialPos.y) {
    head_nav.classList.add('sticky');
  }
  else {
    head_nav.classList.remove('sticky');
  }
});

// Mobile Nav

const menu = document.querySelector(".nav-menu");
const btn = document.querySelector(".nav-btn");

btn.addEventListener('click', function() {
  menu.style.display = "block"
})