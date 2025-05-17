document.addEventListener('DOMContentLoaded', () => {
  // Tipeo animado en el header
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

  // Zoom suave al cargar
  const mainWrapper = document.getElementById('main-wrapper');
  if (mainWrapper) {
    setTimeout(() => {
      mainWrapper.classList.add('zoomed');
    }, 100);
  }

  // Header cambia con el scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Botón para ocultar/mostrar imágenes con animación fade-in
  const btnToggleImages = document.getElementById('btn-toggle-images');
  const photoGrid = document.getElementById('photo-grid');
  let imagesVisible = true;

  btnToggleImages.addEventListener('click', () => {
    if (imagesVisible) {
      photoGrid.classList.add('hidden');
    } else {
      photoGrid.classList.remove('hidden');
      void photoGrid.offsetWidth; // Fuerza reflow para reiniciar animación
    }
    imagesVisible = !imagesVisible;
  });

  // Botón de sonido para el video de fondo
  const btnSound = document.getElementById('btn-sound');
  const video = document.getElementById('bg-video');
  btnSound.addEventListener('click', () => {
    video.muted = !video.muted;
    btnSound.textContent = video.muted ? '🔇' : '🔊';
  });

  // Modal para ampliar imagen
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');
  const images = document.querySelectorAll('#photo-grid img');

  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('show');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });
});
