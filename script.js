const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function openModal(title, text){
  modalTitle.innerText = title;
  modalText.innerText = text;
  modal.classList.add("active");
}

function closeModal(){
  modal.classList.remove("active");
}

/* Cerrar al hacer click fuera */
modal.addEventListener("click", function(e){
  if(e.target === modal){
    closeModal();
  }
});