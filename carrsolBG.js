
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
// Script para Toggle Menu Mobile 
  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }
  

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const dropdownBtnMobile = document.getElementById("dropdownBtnMobile");
  const dropdownMenuMobile = document.getElementById("dropdownMenuMobile");
  const sobreNosBtn = document.getElementById("sobreNosBtn");
  const dropdownSobreNos = document.getElementById("dropdownSobreNos");

  // Mostrar/Ocultar Menu Mobile
  menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
  });

  // Mostrar/Ocultar Dropdown do Menu Mobile
  dropdownBtnMobile.addEventListener("click", () => {
      dropdownMenuMobile.classList.toggle("hidden");
  });

  // Mostrar/Ocultar Dropdown no Desktop
  sobreNosBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownSobreNos.classList.toggle("hidden");
  });

  // Fechar Dropdown ao clicar fora
  document.addEventListener("click", (event) => {
      if (!dropdownSobreNos.contains(event.target) && event.target !== sobreNosBtn) {
          dropdownSobreNos.classList.add("hidden");
      }
  });

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    effect: "fade",
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
});