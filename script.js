document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.querySelector('input[name="sexo"]:checked')?.value
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Nome: ${nome}</p><p>Idade: ${idade}</p><p>Sexo: ${sexo}</p>`;

    // Mostra a caixa de alerta
    document.getElementById("alerta").style.display = "flex";
});

function fecharAlerta() {
    // Esconde a caixa de alerta
    document.getElementById("alerta").style.display = "none";
}

function imprimirPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Pegando os valores do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.querySelector('input[name="sexo"]:checked')?.value || "Não informado";

    // Adiciona o conteúdo ao PDF
    doc.text(`Nome: ${nome}`, 10, 10);
    doc.text(`Idade: ${idade}`, 10, 20);
    doc.text(`Sexo: ${sexo}`, 10, 30);

    // Salva o PDF com o nome "solicitacao.pdf"
    doc.save("solicitacao.pdf");
}