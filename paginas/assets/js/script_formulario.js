document.getElementById('formSiteRapido').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nomeRapido').value;
    const telefone = document.getElementById('whatsRapido').value;
    
    // A mágica acontece aqui: você já define o interesse sem perguntar pro cliente
    const interesse = "Web Design e Ecossistemas Digitais";

    const mensagem = `
Olá, equipe! 🚀
Estava navegando na página de *Ecossistemas Digitais* e quero dar o próximo passo.

👤 Meu Nome: ${nome}
📱 Meu Empreendimento: ${telefone}
🎯 Interesse: ${interesse}

Gostaria de solicitar um orçamento.
    `.trim();

    const numeroAgencia = "558894654939";
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
});