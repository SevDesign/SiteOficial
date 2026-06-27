document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const dadosForm = Object.fromEntries(form);
    dadosForm.necessidades = form.getAll('necessidades');
    
    enviarMensagemProZap(dadosForm);
});

function enviarMensagemProZap(dados) {
    const mensagem = `
Olá, equipe da Agência!
Gostaria de solicitar uma Sessão Estratégica.

*Meus dados:*
- Nome: ${dados.nome}${ dados.contato ? `\n- Contato: ${dados.contato}` : '' }
- Nicho: ${dados.nicho}
- Instagram/Site: ${ dados.instaSite ? `${dados.instaSite}` : 'Ainda não tenho' }
- Interesse: ${ dados.necessidades ? dados.necessidades.join(', ') : 'Ainda não tenho certeza' }

Aguardo o retorno para agendarmos!
    `.trim();

    const numeroAgencia = "558894654939"; 
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
}