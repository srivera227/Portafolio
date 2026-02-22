const buttons = document.querySelectorAll(".btn-modal");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).style.display = "flex";
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});