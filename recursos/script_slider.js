const clientes = document.querySelectorAll('.logo-track img');

clientes.forEach(logo => {
    logo.addEventListener('click', () => {
        let link
        if (logo.dataset.target == 'deco')
            link = null;
        else if (logo.dataset.target == 'psi')
            link = 'https://sevdesign.github.io/LinkPage-PsiSandyBraga/';
        else if (logo.dataset.target == 'nutri')
            link = 'https://sevdesign.github.io/AragaoNutri/';
        else
            link = null;

        if (link != null)
            window.open(link, '_blank');
    });
});