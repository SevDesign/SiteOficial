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
});