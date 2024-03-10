const TODAY = Date.now();

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DATA = {
    people: [
        {person_id: 1, 
         name: "Megan", 
         lastAccess:1511150221000, 
         isMobile:false, 
         avatar:"😀"},
        {person_id: 2, 
         name: "Cara", 
         lastAccess:1511350001000, 
         isMobile:false, 
         avatar:"😡"},
        {person_id: 3, 
         name: "Camille", 
         lastAccess:1511661001000, 
         isMobile:false, 
         avatar:"😜"},
        {person_id: 4, 
         name: "Bree", 
         lastAccess:1511670871221, 
         isMobile:true, 
         avatar:"😵"}
    ]
}

let init = function(){
    loadMaster(DATA.people);
}

let loadMaster = function(people){
    let ul = document.querySelector('.master-list');
    let df = document.createDocumentFragment();
    people.forEach(person => {
        let li = document.createElement('li');
        li.textContent = person.name;
        li.className = 'person';
        li.setAttribute('data-key', person.person_id);
        li.addEventListener('click', showDetail);
        df.appendChild(li);
    })
    ul.appendChild(df);
}

let showDetail = function(ev){
    let person_id = ev.target.getAttribute('data-key');
    let oldActive = document.querySelector('.active');
    (oldActive)? oldActive.classList.remove('active'):null;
    ev.target.classList.add('active');
    let activePerson;
    DATA.people.forEach(person => {
        if(person.person_id == person_id){
            activePerson = person;
        }
    })
    let ul = document.querySelector('.detail-list');
    ul.innerHTML = "" // clear the old list
    let df = document.createDocumentFragment();
    for (let prop in activePerson){
        let li = document.createElement('li');
        li.classList.add(prop);
        if (prop =='lastAccess'){
            let timmy= new Date(activePerson[prop]);
            let str = timmy.toLocaleString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            li.textContent = str;
        } else{
            li.textContent = activePerson[prop]
        }
        console.log(activePerson[prop]);
        df.appendChild(li);
    }
    ul.appendChild(df)

};

document.addEventListener('DOMContentLoaded', init)