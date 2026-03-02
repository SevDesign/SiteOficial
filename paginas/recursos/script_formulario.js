document.addEventListener('DOMContentLoaded', () => {
    // Busca o componente do formulário
    fetch('formulario-componente.html')
        .then(response => {
            if (!response.ok) throw new Error('Falha ao carregar o formulário');
            return response.text();
        })
        .then(htmlString => {
            // Injeta o HTML na div vazia
            document.getElementById('container-formulario-global').innerHTML = htmlString;
            
            // ATENÇÃO: Como o formulário acabou de ser injetado, 
            // é AQUI que você deve colocar aquele código do "submit" 
            // que monta a mensagem do WhatsApp!
            inicializarEventosDoFormulario(); 
        })
        .catch(error => console.error("Erro ao injetar componente:", error));
});

function inicializarEventosDoFormulario() {
    const form = document.getElementById('briefingForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // ... (Seu código de pegar dados e abrir o WhatsApp que fizemos antes) ...
        });
    }
}