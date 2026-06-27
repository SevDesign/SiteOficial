document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

   const pacote = new FormData(e.currentTarget);
   const dados = Object.fromEntries(pacote);

   enviarFormMensagemProZap(dados);
});

function enviarFormMensagemProZap(formObjct) {
    const interesse = "Web Design e Ecossistemas Digitais";
    const mensagem = `
Olá, equipe!
Estava navegando na página de *${formObjct.pagina}* e me interessei.

- Meu Nome: ${formObjct.nome}
- Meu Empreendimento: ${formObjct.empreendimento}

Gostaria de ser atendido.
    `.trim();

    const numeroAgencia = "558894654939";
    const urlWhatsApp = `https://wa.me/${numeroAgencia}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
}