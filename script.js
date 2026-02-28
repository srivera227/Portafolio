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
    <h4>Módulo de Gestión de Empleados</h4>

    <p>
    Este módulo centraliza toda la información personal y laboral de los empleados,
    permitiendo consultas rápidas mediante código interno o número de identificación.
    </p>

    <ul>
      <li>Búsqueda optimizada por código o documento</li>
      <li>Visualización de información personal y contractual</li>
      <li>Asignación y validación de cargo activo</li>
      <li>Historial laboral estructurado</li>
      <li>Control de acceso por roles</li>
    </ul>

    <hr>

    <h4>📅 Módulo de Carga de Horarios y Sucesiones</h4>
      <li>Publicación final tras validación</li>
    </ul>

    <p>
    Solo turnos en estado <strong>Publicado</strong> son expuestos mediante
    la API REST desarrollada en Django.
    </p>
  `;

  openModal(
    "Sistema Inteligente de Gestión de Turnos",
    content,
    [
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/1.png",
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/2.png",
      "https://raw.githubusercontent.com/srivera227/Portafolio/refs/heads/main/images/3.png"
    ]
  );
}