document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splashScreen');
    
    if (splash) {
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            splash.classList.add('fade-out');
            document.body.style.overflow = 'auto';

            setTimeout(() => {
                splash.remove();
            }, 800);
            
        }, 2000);
    }
});