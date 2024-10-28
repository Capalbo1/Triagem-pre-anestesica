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

       // Adicione a logo no canto superior direito (substitua 'logo_url' pela URL da sua logo em base64 ou caminho local)
       const logoUrl = './assets/img/logosantacasa.png'; // Exemplo: 'data:image/png;base64,iVBORw0...'
       doc.addImage(logoUrl, 'PNG', 15, 5, 40, 20);
   
       // Configurações para o cabeçalho
       doc.setFontSize(16);
       doc.text("Santa Casa de Misericórdia de Tatuí", 105, 7, null, null, "center");
        doc.setFont("bold");
       doc.setFontSize(11);
       doc.text("Rua: Rua Maneco Pereira, 299 - Centro - Tatuí", 105,12,null,null,"center");
       doc.setFontSize(16);
        doc.setFont("bold");
       doc.text("Dados do Paciente" , 105 , 40 , null , null , "center");
       // Configurações para centralizar o conteúdo
       doc.setFontSize(12);
       doc.setFont("normal");
       doc.text(`Nome do Paciente: ${document.getElementById("nome").value}`, 15, 50, null, null, "left");
       doc.text(`Idade: ${document.getElementById("idade").value}`, 15, 60, null, null, "left");
       doc.text(`Sexo: ${document.querySelector('input[name="sexo"]:checked')?.value || "Não informado"}`, 15, 70, null, null, "left");
       doc.text(`Data da Solicitação: ${new Date().toLocaleDateString()}`, 15, 80, null, null, "left");
   
       // Lista de exames
       const exames = [
           "Hemograma Completo",
           "Glicemia em Jejum",
           "Colesterol Total e Frações",
           "Triglicerídeos",
           "Ureia e Creatinina",
           "Exame de Urina",
           "Raio-X de Tórax"
       ];
       doc.setFontSize(16);
       doc.setFont("bold");
       doc.text("Exames Solicitados:", 105, 90, null, null, "center");
       doc.setFontSize(12);
       doc.setFont("normal");
       exames.forEach((exame, index) => {
           doc.text(`- ${exame}`, 15, 100 + (index * 10), null, null, "left");
       });
   
       // Espaço para assinatura
       doc.text("________________________________", 105, 280, null, null, "center");
       doc.text("Assinatura do Solicitante", 105, 290, null, null, "center");
   
       doc.save("solicitacao_exames.pdf");
   }
