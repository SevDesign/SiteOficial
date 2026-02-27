document.getElementById('briefingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const nicho = document.getElementById('nicho').value;
    const insta = document.getElementById('insta').value || 'Não informado';

    // 2. Captura os serviços selecionados (checkboxes)
    const servicosSelecionados = [];
    document.querySelectorAll('.btn-check:checked').forEach(checkbox => {
        // Pega o texto da label associada ao checkbox
        const label = document.querySelector(`label[for="${checkbox.id}"]`).innerText;
        servicosSelecionados.push(label);
    });

    const servicosTexto = servicosSelecionados.length > 0 
        ? servicosSelecionados.join(', ') 
        : 'Ainda não tenho certeza';

    const mensagem = `
Olá, equipe da Agência! 🚀
Gostaria de solicitar uma Sessão Estratégica.

*Meus dados:*
👤 Nome: ${nome}
📱 WhatsApp: ${telefone}
🎯 Nicho: ${nicho}
🔗 Instagram/Site: ${insta}

*Tenho interesse em:*
✅ ${servicosTexto}

Aguardo o retorno para agendarmos!
    `.trim();

    const numeroAgencia = "558894654939"; 
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
});