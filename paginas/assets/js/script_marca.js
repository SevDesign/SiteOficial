document.getElementById('formPerformanceRapido').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nomePerf').value;
    const telefone = document.getElementById('whatsPerf').value;
    
    // Tag automática de origem do lead
    const interesse = "Performance de Marca e Tráfego Pago";

    const mensagem = `
Olá, equipe! 📊
Estava analisando a página de *Performance de Marca* e quero escalar minhas vendas.

👤 Nome: ${nome}
📱 WhatsApp: ${telefone}
🎯 Foco: ${interesse}

Aguardo o retorno de um estrategista para mapear meu plano de tração.
    `.trim();

    const numeroAgencia = "5588999999999"; // Seu número
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
});