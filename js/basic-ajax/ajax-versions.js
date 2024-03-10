const uri = 'http://jsonplaceholder.typicode.com/users/7';

let xml = new XMLHttpRequest()

xml.open("GET", uri, true);
console.log(xml.readyState);

xml.onload = () =>{
    if (xml.status=== 200){
        console.log(xml.readyState);
        let obj = JSON.parse(xml.responseText);
        console.log(obj);
        console.log(xml)
    } else {
        console.log("Error");
    }
}

xml.timeout = 3000;

xml.ontimeout = myTimeOut;

function myTimeOut(){
    console.log("Time Out");
}

xml.send();
console.log("XMLHttpRequest")

