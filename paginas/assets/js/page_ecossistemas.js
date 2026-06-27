
// alternar entre projetos e microserviços
document.getElementById('toggle-projetos-microservicos').addEventListener('click', function(e) {
    const projetos = document.getElementById('projetos')
    const microservicos = document.getElementById('microservicos')
    const texto = e.currentTarget.textContent.trim()

    if (texto == "Visualizar Microserviços") {
        projetos.classList.add('d-none')
        microservicos.classList.remove('d-none')
        e.currentTarget.innerHTML = `Visualizar Projetos <i class="bi bi-arrow-down ms-2"></i>`
    }
    else {
        projetos.classList.remove('d-none')
        microservicos.classList.add('d-none')
        e.currentTarget.innerHTML = `Visualizar Microserviços <i class=\"bi bi-arrow-down ms-2\"></i>`
    }
})