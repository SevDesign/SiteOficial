const buttons = document.querySelectorAll('.menu-buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active')); // Limpa todos
    btn.classList.add('active'); // Ativa o clicado
    // Aqui entra sua lógica de trocar a imagem/frase do card
  });
});