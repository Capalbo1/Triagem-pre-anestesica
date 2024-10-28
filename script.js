document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    let resultado = document.getElementById("resultado");
    resultado.textContent = `Nome: ${nome}, Idade: ${idade}`;

    // Mostra a caixa de alerta
    document.getElementById("alerta").style.display = "flex";
});

function fecharAlerta() {
    // Esconde a caixa de alerta
    document.getElementById("alerta").style.display = "none";
}