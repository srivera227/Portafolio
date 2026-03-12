function openModal(title, text, images = []) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");

  modalTitle.textContent = title;

  let currentIndex = 0;

  let content = `
    <p>${text}</p>
    <div class="slider">
      <button class="prev" onclick="changeSlide(-1)">‹</button>
      <img id="slider-image" src="${images[0]}" />
      <button class="next" onclick="changeSlide(1)">›</button>
    </div>
  `;

  modalText.innerHTML = content;

  window.slideImages = images;
  window.currentSlide = 0;

  modal.style.display = "flex";
}

function changeSlide(direction) {
  window.currentSlide += direction;

  if (window.currentSlide < 0)
    window.currentSlide = window.slideImages.length - 1;

  if (window.currentSlide >= window.slideImages.length)
    window.currentSlide = 0;

  document.getElementById("slider-image").src =
    window.slideImages[window.currentSlide];
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function openProject1() {
  const content = `
    <h4></h4>
    <hr>
    <br>
    <p>
    Sistema web para la gestión inteligente de turnos operativos en sistemas de transporte masivo mediante validación automática de reglas de negocio e integración con sistemas empresariales ERP
    </p>
    <br>
    <ul>
      <li>Lectura y cargue de los horarios laborales</li>
      <li>Detección y notificación de errores</li>
      <li>Sistema de precarga, permite la verificación de la información cargada antes de publicar</li>
      <li>Sistema de actualización y control</li>
      <li>Control de acceso por roles</li>
    </ul>
    <br>
    <hr>
  `;

  openModal(
    "Sistema Inteligente de Gestión de Turnos",
    content,
    [
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/0.png",
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/1.png",
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/2.png",
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/3.png"
    ]
  );
}