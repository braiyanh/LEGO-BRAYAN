let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Mostrar la primera imagen
slides[currentSlide].style.opacity = 1;

function changeSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

// Cambia la imagen cada 3 segundos
setInterval(changeSlide, 1000);