document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o Lenis (Rolagem suave global)
    const lenis = new Lenis({
        duration: 1.2, // Ajuste a "inércia" (padrão é 1.2)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
        smoothWheel: true
    });

    // Loop de animação obrigatório do Lenis
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Lógica da Hero (Simplificada)
    const heroHeight = () => window.innerHeight * 0.75; // 75vh
    let isTransitioning = false;

    window.addEventListener('wheel', (e) => {
        if (isTransitioning) return;

        const scrollY = window.scrollY;
        const limit = heroHeight();
        const threshold = 10; // Sensibilidade

        // Descendo: Topo -> Portfólio
        if (e.deltaY > 0 && scrollY < threshold) {
            isTransitioning = true;
            lenis.scrollTo(limit, {
                duration: 1.5, // Duração da transição da Hero
                lock: true,    // Trava o usuário durante a animação
                onComplete: () => isTransitioning = false
            });
        }
        
        // Subindo: Portfólio -> Topo
        else if (e.deltaY < 0 && scrollY <= limit && scrollY > limit - 50) {
            isTransitioning = true;
            lenis.scrollTo(0, {
                duration: 1.5,
                lock: true,
                onComplete: () => isTransitioning = false
            });
        }
    }, { passive: false });
});