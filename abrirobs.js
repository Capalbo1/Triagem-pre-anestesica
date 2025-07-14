// Seleciona todos os inputs de sexo
const inputsSexo = document.querySelectorAll('input[name="sexo"]');
const campoObstetricia = document.getElementById("campo-obstetricia");

// Adiciona o evento de mudança a cada input de sexo
inputsSexo.forEach(input => {
    input.addEventListener("change", function () {
        if (this.value === "feminino") {
            campoObstetricia.classList.remove("hidden"); // Exibe o campo
        } else {
            campoObstetricia.classList.add("hidden"); // Oculta o campo
        }
    });
});

document.getElementById("reset").addEventListener("click", function () {
    location.reload(); // Recarrega a página atual
});



// Seleciona elementos
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");

// Abre o modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fecha o modal
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal clicando fora dele
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


