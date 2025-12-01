/* FUNÇÕES AUXILIARES */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* TRANSIÇÃO DE IMAGENS DO HERO SECTION */
{
    let index = 0;
    let in_out = true;

    const texts = document.querySelectorAll('.text-1, .text-2, .text-3');
    const bg_1 = document.getElementById('fundo-1');
    const bg_2 = document.getElementById('fundo-2');
    const bg_3 = document.getElementById('fundo-3');

    bg_2.style.display = 'block';
    bg_3.style.display = 'block';

    function ShowText(){
        texts[(index + 1) % 3].style.opacity = 1;
    }

    async function HideText(){        
        texts[index].style.opacity = 0;
        await sleep(600);
    }

    async function ChangeBackground(){
        if (index == 0) {
            HideText();
            await sleep(600);
            
            bg_1.style.transform = 'translateX(-100%)';
            await sleep(600);
            ShowText();
        }
        
        else if (index == 1) {
            HideText();
            await sleep(600);
            
            bg_2.style.transform = 'translateX(-100%)';
            await sleep(600);
            ShowText();
        }
        
        else if (index == 2) {
            HideText();
            await sleep(600);

            bg_3.style.transform = 'translatex(100%)';
            bg_1.style.transform = 'translatex(0%)';
            await sleep(600);

            bg_2.style.transform = 'translateX(0%)';
            bg_3.style.transform = 'translateX(0%)';
            ShowText();
        }
    }

    function ChangeDots(){
        const dots = document.querySelectorAll('.dot');

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    async function ExecutarCiclo(){
        await ChangeBackground();
        ChangeDots();

        index = (index + 1) % 3;
    }

    setInterval(ExecutarCiclo, 6000);
}


/* TRANSIÇÃO DE ITENS DO PORTFÓLIO */
{
    let num_item_atual = 1;  // numero do item atual
    const total_items = 3;  // total de items no carrossel

    function ChangeButton(){
        const dots_port = document.querySelectorAll('.dot-port');
        
        dots_port.forEach((dot, i = 0) => {
            const index = Number(dot.dataset.index); 
            dot.classList.toggle('active', index == num_item_atual);
        });
    }

    async function ChangePortItemToLeft(num_item_seguinte){
        if (num_item_atual == 1) return;

        const item_atual = document.getElementById(`item-${num_item_atual}`);
        const prox_item = document.getElementById(`item-${num_item_seguinte}`)

        prox_item.style.transitionDuration = '.6s'

        item_atual.style.transition = 'transform 0.4s ease-in';
        item_atual.style.transform = 'translateX(100%)';

        await sleep(400);
        item_atual.style.display = 'none'

        prox_item.style.display = 'flex'
        await sleep(50);
        prox_item.style.transition = `transform 0.5s ease-out`;
        prox_item.style.transform = `translate(0%)`

        num_item_atual--;
        ChangeButton();
    }

    async function ChangePortItemToRight(num_item_seguinte){
        if (num_item_atual == total_items) return;

        const item_atual = document.getElementById(`item-${num_item_atual}`);
        const prox_item = document.getElementById(`item-${num_item_seguinte}`)

        prox_item.style.transitionDuration = '.6s'

        item_atual.style.transition = 'transform 0.4s ease-in';
        item_atual.style.transform = 'translateX(-100%)';

        await sleep(400);
        item_atual.style.display = 'none'

        prox_item.style.display = 'flex'
        await sleep(50);
        prox_item.style.transition = `transform 0.5s ease-out`;
        prox_item.style.transform = `translate(0%)`

        num_item_atual++;
        ChangeButton();
    }

    const btn_left = document.querySelector('.fa-chevron-left');
    const btn_right = document.querySelector('.fa-chevron-right');

    const container_item = document.querySelector('.container-item');
    const all_dots = document.querySelectorAll('.dot-port');

    btn_left.addEventListener('click', () => ChangePortItemToLeft(num_item_atual - 1));
    btn_right.addEventListener('click', () => ChangePortItemToRight(num_item_atual + 1));


    all_dots.forEach((dot) => {
        dot.addEventListener('click', async () => {
            const index = Number(dot.dataset.index);    

            if (index < num_item_atual) 
                await ChangePortItemToLeft(index);
            else if (index > num_item_atual) 
                await ChangePortItemToRight(index);

            ChangeButton();
        });
    });
}


/* MASCARA DE TELEFONE */
{
    document.getElementById('telefone').addEventListener('input', function(e) {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v;
    });
}
