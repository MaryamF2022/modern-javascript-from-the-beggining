

document.addEventListener("DOMContentLoaded", init)

function init(){
    let btn = document.getElementById('btn');
    let lnk = document.getElementById('lnk');
    let txt = document.getElementById('txt');

    txt.addEventListener('input', ev => {
        console.log(ev.type,  ev.target, ev.target.value)
    })
    txt.addEventListener('change', ev=> {
        console.log(ev.type, ev.target, ev.target.value);
    })
    txt.addEventListener('blur', ev=>{
        console.log(ev.type)
    })
    btn.addEventListener("click", buttonClicked);
    function buttonClicked(ev){
        console.log(ev.type, ev.target, ev.currentTarget)
    }
    lnk.addEventListener('click', linkClicked);
};

function linkClicked(ev){
    ev.preventDefault(); // prevent the link from being followed
    console.log(ev.type, ev.target, ev.currentTarget)
}