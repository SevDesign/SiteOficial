document.addEventListener("DOMContentLoaded", function() {
    const modalReel = document.getElementById('modalReel');
    const playerReel = document.getElementById('playerReel');

    if (modalReel && playerReel) {
        // Quando o modal começar a abrir...
        modalReel.addEventListener('show.bs.modal', function(event) {
            // Descobre qual card foi clicado
            const button = event.relatedTarget;
            // Pega o caminho do vídeo
            const videoSrc = button.getAttribute('data-video-src'); 
            
            // Injeta no player e dá o play
            playerReel.src = videoSrc;
            playerReel.play();
        });

        // Quando o modal fechar...
        modalReel.addEventListener('hide.bs.modal', function() {
            // Pausa e esvazia a memória
            playerReel.pause();
            playerReel.src = ''; 
        });
    }
});
