const url = 'https://postman-echo.com/post';

document.addEventListener('DOMContentLoaded', init);

function init(){
    document.getElementById('btnSubmit').addEventListener('click', upload);
}

function upload(ev){
    ev.preventDefault();

    let h = new Headers();
    h.append('Accept', 'application/json') // what we except back

    //bundle the files and data we want to send to the server
    let fd = new FormData();
    fd.append('user-id', document.getElementById('user_id').value);

    let myFiles = document.getElementById('avatar_img').files[0];
    fd.append('avatar', myFiles, "avatar.png");
    //$_FILES['avatar']['file_name'] "avatar.png"

    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });

    fetch(req)
        .then((response) => {
            document.getElementById('output').textContent = 'Response recieved from server' ;
            console.log(fd)
        })
        .catch(err => {
            console.log("ERROR:", err.message)
        })
}