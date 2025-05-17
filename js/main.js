document.addEventListener('DOMContentLoaded', () => {
    // Animación de tipeo para el h1
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
  
    // Zoom in al cargar el contenedor principal
    const mainWrapper = document.getElementById('main-wrapper');
    if (mainWrapper) {
      setTimeout(() => {
        mainWrapper.classList.add('zoomed');
      }, 100);
    }
  });
  
  // Efecto al hacer scroll: cambia el fondo del header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
  