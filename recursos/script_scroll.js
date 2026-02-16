document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    let isAnimating = false;

    // Configuração
    const heroHeight = () => window.innerHeight * 0.75; // 80vh dinâmico
    const duration = 1000; // Tempo em ms (ajuste se quiser mais lento/rápido)

    // Função de Easing (Cubic Ease Out - Suave no final)
    const easeOutCubic = (t) => (--t) * t * t + 1;

    const customScrollTo = (targetY) => {
        isAnimating = true;
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            
            // Calcula o progresso (0 a 1)
            let progress = Math.min(timeElapsed / duration, 1);
            
            // Aplica a curva matemática (Ease-Out)
            const ease = easeOutCubic(progress);

            window.scrollTo(0, startY + (distance * ease));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isAnimating = false; // Libera o scroll
            }
        };

        requestAnimationFrame(animation);
    };

    window.addEventListener('wheel', (e) => {
        if (isAnimating) {
            e.preventDefault();
            return;
        }

        const scrollY = window.scrollY;
        const limit = heroHeight();
        const threshold = 5; // Tolerância para garantir o trigger

        // Descendo: Do topo (0) para a segunda sessão
        if (e.deltaY > 0 && scrollY < threshold) {
            e.preventDefault();
            customScrollTo(limit);
        }
        
        // Subindo: Da segunda sessão de volta para o topo (0)
        // Ativa apenas se estivermos EXATAMENTE no ponto de corte ou um pouco antes
        else if (e.deltaY < 0 && scrollY <= limit && scrollY > limit - 50) {
            e.preventDefault();
            customScrollTo(0);
        }
        
    }, { passive: false });
});