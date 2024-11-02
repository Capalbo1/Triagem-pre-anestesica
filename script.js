document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    imprimirPDF(); // Chama a função para gerar o PDF com os dados preenchidos
    
});

function imprimirPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Captura dados do formulário de cadastro
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value, 10);
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "Não informado";
   // const frequenciaCardiaca = document.getElementById("fc").value;

    // Lista de exames
    let exames = [];

    // Verificação para adicionar exame "Beta HCG"
    if (idade < 45 && sexo === "feminino") {
        exames.push({ nome: "Beta HCG", tipo: "Laboratorial" });
    }
    if (idade > 44 && sexo === "masculino") {
        exames.push({ nome: "ECG", tipo: "Imagem" });
    }
    if (idade > 54 ) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" }
            
        );
    }
    if (idade > 69 ) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },

            
        );
    }
    if (idade > 74 ) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Albumina", tipo: "Laboratorial" }
            
        );
    }
    const doençaSelecionada = Array.from(document.querySelectorAll('input[name="doenças"]:checked')).map(input => input.value);
    if ( doençaSelecionada.includes( "cardiopatia-isquemica")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes("insuficiencia-cardiaca")) {
        exames.push(
            { nome: "ECG", tipo: "imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Raio-x", tipo: "Imagem" },
            { nome: "Ecocardiograma", tipo: "Imagem" },
        );
    }
    if ( doençaSelecionada.includes("hipertensao-arterial-isquemica")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "fibrilacao-atrial-cronica")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" }
        );
    }
    if ( doençaSelecionada.includes( "doença-arterial-periferica")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
        );
    }
    if ( doençaSelecionada.includes( "valvulopatias")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Raio-x", tipo: "imagem" },
            { nome: "Ecocardiograma", tipo: "Imagem" },
        );
    }
    if ( doençaSelecionada.includes( "outras-arritmias")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
        );
    }
   
    if ( doençaSelecionada.includes( "diabete-mellitus")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "hipertireoidismo")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Cálcio", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "hipotireoidismo")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "HMG", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "doenca-de-addison")) {
        exames.push(
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "doenca-de-cushing")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "hipoparatireoidismo")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Cálcio", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "hiperparatireoidismo")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Cálcio", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "obesidade-morbida")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
   
   
    if ( doençaSelecionada.includes( "avc")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "epilepsia")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" }
        );
    }
    if ( doençaSelecionada.includes( "alteraçõesvasculares/aneurisma")) {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "hepatite-infecciosa")) {
        exames.push(
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "TGO", tipo: "Laboratorial" },
            { nome: "TGP", tipo: "Laboratorial" },
            { nome: "Fosfatase alcalina", tipo: "Laboratorial" },
            { nome: "Gama-GT", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "hepatite-alcoolica")) {
        exames.push(
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "TGO", tipo: "Laboratorial" },
            { nome: "TGP", tipo: "Laboratorial" },
            { nome: "Fosfatase alcalina", tipo: "Laboratorial" },
            { nome: "Gama-GT", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "acometimento-neoplasico")) {
        exames.push(
          { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "TGO", tipo: "Laboratorial" },
            { nome: "TGP", tipo: "Laboratorial" },
            { nome: "Fosfatase alcalina", tipo: "Laboratorial" },
            { nome: "Gama-GT", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "asma")) {
        exames.push(
          { nome: "ECG", tipo: "imagem" },
            { nome: "Raio-X", tipo: "imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "dpoc")) {
        exames.push(
            { nome: "ECG", tipo: "imagem" },
            { nome: "Raio-X", tipo: "imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes( "doeca-renal")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes ( "doenca-hematologica")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes("Coagulopatia")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes ( "Disturbio-disabsortivo-desnutrição")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "ECG", tipo: "Imagem" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Albumina", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes ( "anticoagulantes")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Coagulogram", tipo: "Laboratorial" },
            { nome: "Cálcio", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes  ("Diuréticos")) {
        exames.push(
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes  ("Corticosteróides")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
        );
    }
    if ( doençaSelecionada.includes  ("quimioterápicos")) {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
        );
    }

    // Captura a opção selecionada
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked')?.value;

    // Lógica para adicionar exames com base na opção selecionada
    if (opcaoSelecionada === "opcao1") {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Raio-X", tipo: "Imagem" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
            { nome: "Ecocardiograma", tipo: "Imagem" }
        );
    }
    if (opcaoSelecionada === "opcao2") {
        exames.push(
            { nome: "ECG", tipo: "Imagem" },
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" }
        );
    }
    if (opcaoSelecionada === "opcao3") {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "TGO", tipo: "Laboratorial" },
            { nome: "TGP", tipo: "Laboratorial" },
            { nome: "Fosfatase alcalina", tipo: "Laboratorial" },
            { nome: "Gama-GT", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Raio X", tipo: "Imagem" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" }
        );
    }
    if (opcaoSelecionada === "opcao4") {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "TGO", tipo: "Laboratorial" },
            { nome: "TGP", tipo: "Laboratorial" },
            { nome: "Fosfatase alcalina", tipo: "Laboratorial" },
            { nome: "Gama-GT", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Raio X", tipo: "Imagem" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" }
        );
    }
    if (opcaoSelecionada === "opcao5") {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" }
        );
    }
    if (opcaoSelecionada === "opcao6") {
        exames.push(
            { nome: "HMG", tipo: "Laboratorial" },
            { nome: "Eletrólitos", tipo: "Laboratorial" },
            { nome: "Glicemia", tipo: "Laboratorial" },
            { nome: "Coágulo", tipo: "Laboratorial" },
            { nome: "Raio X", tipo: "Imagem" },
            { nome: "Ureia", tipo: "Laboratorial" },
            { nome: "Creatinina", tipo: "Laboratorial" },
            { nome: "Lactato", tipo: "Laboratorial" }
        );
    }
    if (opcaoSelecionada === "opcao7") {
        exames.push(
        );
    }

    exames = exames.filter((exame, index, self) =>
        index === self.findIndex((e) => e.nome === exame.nome)
    );
    
 
    // Adicione mais verificações aqui para outras opções, se necessário

    // Adiciona logo
    const logoUrl = 'assets/img/logosantacasa.png';
    doc.addImage(logoUrl, 'PNG', 15, 5, 40, 20);

    // Cabeçalho do PDF
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Santa Casa de Misericórdia de Tatuí", 105, 7, null, null, "center");
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("Rua: Rua Maneco Pereira, 299 - Centro - Tatuí", 105, 12, null, null, "center");

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Dados do Paciente", 105, 40, null, null, "center");

    // Dados do paciente no corpo do PDF
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Nome do Paciente: ${nome}`, 15, 50, null, null, "left");
    doc.text(`Idade: ${idade}`, 15, 60, null, null, "left");
    doc.text(`Sexo: ${sexo}`, 15, 70, null, null, "left");

    // Data e hora da solicitação
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString();
    const horaFormatada = dataAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    doc.text(`Data e Hora da Solicitação: ${dataFormatada} ${horaFormatada}`, 15, 80, null, null, "left");

    // Exames Solicitados
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Exames Solicitados:", 105, 90, null, null, "center");
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    exames.forEach((exame, index) => {
        doc.text(`- ${exame.nome} (Tipo: ${exame.tipo})`, 15, 100 + (index * 10), null, null, "left");
    });

    // Espaço para assinatura
    doc.text("________________________________", 105, 280, null, null, "center");
    doc.text("Assinatura do Solicitante", 105, 290, null, null, "center");

    // Salva o PDF
    doc.save("solicitacao_exames.pdf");
}
