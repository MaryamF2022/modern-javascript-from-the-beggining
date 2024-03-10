let main = document.querySelector('#main');
let ul = main.querySelector("ul");
let h1 = document.querySelector("header h1");
let foot = document.querySelector("#foot p");

main.className = 'some abc';
main.id = "main";
main.title = "mouseover text";


// foot.style.backgroundColor = "salmon";
foot.style.setProperty('background-color', "salmon");
// foot.style.cssText = "font-family: sans-serif; letter-spacing:5px;"


foot.classList.add("some");
foot.classList.remove("other");
foot.classList.toggle("other");

let style = window.getComputedStyle(foot);
console.log(style);
console.log(style.item(200));
console.log(style.getPropertyValue('color'))

console.log(document.styleSheets)



