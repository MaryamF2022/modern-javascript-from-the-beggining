const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

let formData = new FormData();
formData.append("userId", 3);
formData.append('title', "This is my title");
formData.append('body', 'this is a body text of the post')

let options = {
    method: "POST",
    mode: "cors",
    body: formData
}

let req = new Request(uri, options);

fetch(req)
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error("Invalid HTTP")
        }
    })
    .then(j => {
        console.log(j);
    })
    .catch(err => {
        console.log("Error", err.message)
    })