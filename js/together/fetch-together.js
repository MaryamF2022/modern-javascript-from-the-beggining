const uri = 'http://jsonplaceholder.typicode.com/users';

let request = new Request(uri, {
    method: 'GET',
    mode: 'cors'
});

fetch(request)
    .then( (response) => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error('BAD HTTP!');
        }
    })
    .then( (jsonData) => {
        // console.log(jsonData);
        
        let ul = document.querySelector('#users');
        let df = new DocumentFragment();

        jsonData.forEach( (user) => {
            let li = document.createElement('li');
            let pn = document.createElement('p');
            let pue = document.createElement('p');

            pn.textContent = user.name;
            pue.textContent = ''.concat(user.username, ' - ', user.email);
            pn.className = 'name';
            pue.classList.add('info');
            li.appendChild(pn);
            li.appendChild(pue);

            df.appendChild(li);
        });

        ul.appendChild(df);
    })
    .catch(err => {
        console.log('ERROR', err.message)
    })