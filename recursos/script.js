document.getElementById('briefingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // 1. Captura os valores dos campos (certifique-se de que os IDs existam no HTML)
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

    // 3. Monta a mensagem formatada para vendas
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

    // 4. Codifica a mensagem para o formato de URL e cria o link do WhatsApp
    // Substitua o '5588999999999' pelo número da sua agência (com código do país 55 e DDD)
    const numeroAgencia = "5588999999999"; 
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    // 5. Redireciona o cliente para o WhatsApp
    window.open(urlWhatsApp, '_blank');
});