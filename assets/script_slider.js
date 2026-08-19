document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("logoTrack");
        
    const logos = Array.from(track.children);
    
    for (let i = 0; i < 3; i++) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true); 
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    }

    track.addEventListener('click', (event) => {
        const logo = event.target.closest('img');
        
        if (!logo) return;

        let link = null;
        const target = logo.dataset.target;

        if (target === 'psi') {
            link = 'https://sevdesign.github.io/LinkPage-PsiSandyBraga/';
        } else if (target === 'nutri') {
            link = 'https://sevdesign.github.io/AragaoNutri/';
        } else if (target === 'kids') {
            link = 'https://sevdesign.github.io/Monte-Castelo-Links/';
        }

        if (link) {
            window.open(link, '_blank');
        }
    });
});