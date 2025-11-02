// === MENU HAMBÚRGUER ===
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// === Exibe alerta de sucesso após envio do formulário ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); //
  const alertBox = document.getElementById("alert-success");

  if (form && alertBox) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); //

      // Alerta de sucesso
      alertBox.style.display = "block";

      // Some automaticamente após 5 segundos
      setTimeout(() => {
        alertBox.style.display = "none";
      }, 5000);
    });
  }
});
