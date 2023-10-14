// script responsável pela automação do menu hamburger

const btnMobile = document.getElementById('btn-mobile')
// const >> declara a nossa variável no uso do decorrer do código

function togglemenu(event){
    if (event.type === 'touchstart') event.preventdefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu');
    }
}

btnMobile.addEventListener('click', togglemenu)
btnMobile.addEventListener('touchstart', togglemenu)