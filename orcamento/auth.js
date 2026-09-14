document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const inputElement = document.getElementById('proposalName');
    const errorMessage = document.getElementById('errorMessage');
    
    const inputValue = inputElement.value.toLowerCase().trim();

    const rotas = {
        'genesis': 'genesis.html',
        'dra evyllen': 'dra_evyllen.html',
        'evyllen ponte': 'dra_evyllen.html',
        'evyllen': 'dra_evyllen.html',
        'boutique': 'boutique.html',
        'botique': 'boutique.html',
        'botike': 'boutique.html',
        'roupa': 'boutique.html',
        'moda': 'boutique.html',
        'moda fermina': 'boutique.html',
        'poker': 'boutique.html'
    };

    if (rotas[inputValue]) {
        errorMessage.classList.add('hidden');
        window.location.href = rotas[inputValue]; // Faz o redirecionamento
    } else {
        errorMessage.classList.remove('hidden');
        inputElement.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
        
        setTimeout(() => {
            inputElement.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
        }, 2500);
    }
});