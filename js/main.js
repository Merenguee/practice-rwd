document.addEventListener('DOMContentLoaded', () => {
    // Tipeo en header
    const titulo = document.querySelector('.header h1');
    if (titulo) {
      const texto = titulo.textContent;
      titulo.textContent = '';
      let i = 0;
      function escribir() {
        if (i < texto.length) {
          titulo.textContent += texto.charAt(i);
          i++;
          setTimeout(escribir, 100);
        }
      }
      escribir();
    }
  
    // Zoom efecto al cargar
    const mainWrapper = document.getElementById('main-wrapper');
    if (mainWrapper) {
      setTimeout(() => {
        mainWrapper.classList.add('zoomed');
      }, 100);
    }
  
    // Header con scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Botón para ocultar/mostrar imágenes
    const btnToggleImages = document.getElementById('btn-toggle-images');
    const photoGrid = document.getElementById('photo-grid');
    let imagesVisible = true;
  
    btnToggleImages.addEventListener('click', () => {
      if (imagesVisible) {
        photoGrid.classList.add('hidden-images');
      } else {
        photoGrid.classList.remove('hidden-images');
      }
      imagesVisible = !imagesVisible;
    });
  
    // Botón para activar/desactivar sonido
    const btnSound = document.getElementById('btn-sound');
    const video = document.getElementById('bg-video');
  
    btnSound.addEventListener('click', () => {
      video.muted = !video.muted;
      btnSound.textContent = video.muted ? '🔇' : '🔊';
    });
  });
  