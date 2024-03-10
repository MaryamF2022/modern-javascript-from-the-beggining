const showModal = (ev) => {
    ev.preventDefault()
    let modal = document.querySelector('.modal');
    modal.classList.remove('off');
    modal.classList.add('on');

}

const showOverlay = (ev) =>{
    ev.preventDefault();
    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('hide');
    overlay.classList.add('show');
    showModal(ev)
}

const hideOverlay = function(ev){
    ev.stopPropagation();
    ev.preventDefault();
    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    hideModal(ev);
}

const hideModal =  function(ev){
    let modal = document.querySelector('.modal');
    modal.classList.remove('on');
    modal.classList.add('off');
}


const init = (ev) =>{
    document.querySelector('p').addEventListener('click', showOverlay);
    document.querySelector('.close-btn').addEventListener('click', hideOverlay);

    document.querySelector('.overlay').addEventListener('click', hideOverlay);
    let overlay = document.querySelector('.overlay');
    overlay.style.cursor = 'pointer'
}

document.addEventListener('DOMContentLoaded', init);