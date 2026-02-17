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
