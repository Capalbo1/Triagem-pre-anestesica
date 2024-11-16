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
