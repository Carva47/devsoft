
        const slides = document.querySelectorAll('#carousel > div[data-index]');
        let currentIndex = 0;
      
        function showNextSlide() {
          slides[currentIndex].classList.remove('opacity-100');
          slides[currentIndex].classList.add('opacity-0');
          currentIndex = (currentIndex + 1) % slides.length;
          slides[currentIndex].classList.remove('opacity-0');
          slides[currentIndex].classList.add('opacity-100');
        }
      
        setInterval(showNextSlide, 5000); // Troca de slide a cada 5 segundos

        // Animações de scroll AOS.init
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
             once: false,     // Executar apenas uma vez
         });

         // Função para alternar a visibilidade do menu em dispositivos móveis
// Função para alternar a visibilidade do menu em dispositivos móveis
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}
