const buttons = document.querySelectorAll('.menu-buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active')); // Limpa todos
    btn.classList.add('active'); // Ativa o clicado
    // Aqui entra sua lógica de trocar a imagem/frase do card
  });
});


document.getElementById('briefingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const nicho = document.getElementById('nicho').value;
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    const objetivo = document.getElementById('objetivo').value;
    
    // Montando o texto da mensagem
    const mensagem = `*Novo Diagnóstico de Marketing*%0A%0A` +
                     `*Nome:* ${nome}%0A` +
                     `*Nicho:* ${nicho}%0A` +
                     `*Perfil:* ${perfil}%0A` +
                     `*Objetivo:* ${objetivo}`;
    
    const fone = "5588999999999"; // Coloque seu número aqui
    const url = `https://api.whatsapp.com/send?phone=${fone}&text=${mensagem}`;
    
    window.open(url, '_blank');
});