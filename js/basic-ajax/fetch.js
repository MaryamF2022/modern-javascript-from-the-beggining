const root = 'http://jsonplaceholder.typicode.com/users/7';

fetch(root)
    .then((response) =>{
        console.log(response);
    })