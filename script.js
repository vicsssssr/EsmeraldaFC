let indiceActual = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
  if (slides.length === 0) return;
  slides.forEach((slide) => slide.classList.remove('active'));
  
  if (index >= slides.length) {
    indiceActual = 0;
  } else if (index < 0) {
    indiceActual = slides.length - 1;
  } else {
    indiceActual = index;
  }
  
  slides[indiceActual].classList.add('active');
}

function cambiarSlide(direccion) {
  mostrarSlide(indiceActual + direccion);
}

// Cambio automático cada 5 segundos
setInterval(() => {
  cambiarSlide(1);
}, 5000);