document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splashScreen');
    
    if (splash) {

        setTimeout(() => {
            splash.classList.add('fade-out');

            setTimeout(() => {
                splash.remove();
            }, 700);
            
        }, 1000);
    }
});