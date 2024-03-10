const myString = 'developer';

function capitalize(str){
    return str.replace(/^\w/, str[0].toUpperCase())
}

console.log(capitalize(myString));
console.log(myString);