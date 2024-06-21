document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
      navbarToggle.classList.toggle('active'); // Agrega o remueve la clase 'active' al botón de toggle
  });

  // Cierra el menú cuando se hace clic en un enlace del menú (opcional)
  navbarMenu.querySelectorAll('a').forEach(item => {
      item.addEventListener('click', () => {
          navbarMenu.classList.remove('show');
          navbarToggle.classList.remove('active');
      });
  });
});

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
var cantidadCards = 3;

let currentIndex = 0;

function updateCarousel() {
    const width = carousel.clientWidth / cantidadCards; // Se divide entre la cantidad de tarjetas que deseo visualizar
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
      currentIndex--;
  } else {
      currentIndex = carousel.children.length - cantidadCards; // Ajusta el número de tarjetas visibles
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - cantidadCards) { // Ajusta el número de tarjetas visibles
      currentIndex++;
  } else {
      currentIndex = 0;
  }
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

/* Media with 375px a 480px */
if ((window.matchMedia('(max-width: 375px)').matches) || (window.matchMedia('(max-width: 480px)').matches)) {
  cantidadCards = 1;
}

if (window.matchMedia('(max-width: 768px)').matches) {
  cantidadCards = 2;
}

function mostrarMensaje() {    
  alert("¡Gracias por tu mensaje! En breve nos pondremos en contacto contigo.");
}