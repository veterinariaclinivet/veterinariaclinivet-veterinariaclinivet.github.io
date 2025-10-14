document.addEventListener('DOMContentLoaded', () => {
  // Slider automático
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3500);

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Modal servicios
  const modal = document.getElementById("modalServicio");
  const modalTitle = document.getElementById("modalTitle");
  const modalInfo = document.getElementById("modalInfo");
  const modalImg = document.getElementById("modalImg");
  const modalBtnWhats = document.getElementById("modalBtnWhats");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".servicio-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalInfo.textContent = card.dataset.info;
      modalImg.src = card.dataset.img;
      modalBtnWhats.href = `https://wa.me/573203909390?text=Hola!%20Quiero%20más%20información%20sobre%20${encodeURIComponent(card.dataset.title)}.`;
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
