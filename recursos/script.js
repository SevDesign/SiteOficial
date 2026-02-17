const buttons = document.querySelectorAll('.menu-buttons button');
const main_content = document.getElementById('main-content');
let activeButton = false;
let lastActiveContent = null;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) { 
        // se o botão atual está ativo (é o único ativo)

      btn.classList.remove('active');

      lastActiveContent.style.display = 'none';
      main_content.style.display = 'block';

      activeButton = false;
    }

    else if (!btn.classList.contains('active') && activeButton) {
        // se vai ativar o botão atual e existe outro ativo

      buttons.forEach(button => {
        if (button.classList.contains('active')) {
          button.classList.remove('active');
        }
      });

      btn.classList.add('active');

      lastActiveContent.style.display = 'none';

      lastActiveContent = document.getElementById(btn.dataset.target);
      lastActiveContent.style.display = 'flex';

      activeButton = true;
    }

    else if (!btn.classList.contains('active') && !activeButton){
        // se vai ativar o botão atual e ninguém estiver ativo

        btn.classList.add('active');
        
        lastActiveContent = document.getElementById(btn.dataset.target);

        main_content.style.display = 'none';
        lastActiveContent.style.display = 'flex';

        activeButton = true;
    }
  });
});




/* FORMULARIO DE BRIEFING */

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


