
  document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector('.carousel-images');
    const dotsContainer = document.querySelector('.carousel-dots');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    let currentIndex = 0;

    // Inicializa los puntos (dots)
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);

      dot.addEventListener('click', () => {
        goToImage(i);
      });
    }

    // Inicia el carrusel
    updateCarousel();

    // Función para actualizar el carrusel
    function updateCarousel() {
      imagesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Función para ir a una imagen específica
    function goToImage(index) {
      currentIndex = index;
      updateCarousel();
    }

    // Función para ir a la siguiente imagen
    function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }

    // Función para ir a la imagen anterior
    function prevImage() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    }

    // Agrega eventos para navegar con las flechas del teclado
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    });

    // Configura un temporizador para cambiar automáticamente las imágenes cada 3 segundos
    setInterval(nextImage, 3000);
  });

