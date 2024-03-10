// let colorDiv, divB;

let STEVE = {
    colorDiv: function(ev){
        let target = ev.currentTarget;
        target.style.backgroundColor = 'olive';
        target.style.color = '#333'; 
    },

    init: function(){
        let divB = document.getElementById('output');
        divB.addEventListener('mouseover', this.colorDiv);
    }
}

STEVE.init();

// colorDiv = function(ev){
//     let target = ev.currentTarget;
//     target.style.backgroundColor = 'olive';
//     target.style.color = '#333'; 
// }

// divB = document.getElementById('output');

// divB.addEventListener('mouseover', colorDiv);