// dom.js

/**
document.createElement(tagname)
document.createTextNode(Text)
parent.appendChild(node)
parent.removeChild(node)

element.innerHTML
element.textContent
**/

/**
parent.children - is a nodeList of elements
parent.firstElementChild - is 1 elemnt node
parent.lastElementChild - is lat element node
node.nextElementSibling - is an element node
node.previousElementSibling - is an elemnt node
node.parentNode - is an element node
node.contains(node) - returns a node
**/

/** 
node.insertBefore(newNode, referenceNode)

parent.replaceChild(new, old)
node.cloneNode(true)
**/

let main = document.querySelector(".main");
let h2 = main.querySelector("h2");
h2.textContent = 'Loading Movies';

let p = h2.nextElementSibling;
p.innerHTML = "And now a list of <strong>MOVIES</strong>";

let ul = document.createElement('ul');
main.appendChild(ul);

movies.forEach(item => {
    let li = document.createElement('li');
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    ul.appendChild(li);
});

// main.removeChild(ul)

main = document.querySelector('.main');
let c = main.children;
let c2 = main.childNodes;
console.log(c);
console.log(c2)

// ul = main.children[2];
// h2 = main.firstElementChild;
// ul2 = main.children[1].nextElementSibling;
// console.log('result', ul2)
h2a = main.children[1].previousElementSibling;
console.log('result', h2a)

ul = main.children[2];
let lis = ul.children;
let firstLi = lis[0] // ul.firstElementChild

let txt = firstLi.textContent;
let txt2 = firstLi.firstChild.nodeValue;
console.log('result', txt, txt2);

firstLi.firstChild.nodeValue = txt.toUpperCase();

let main2 = ul.parentNode;
console.log(main2)

let ul3 = document.querySelector('.main ul');
let lis2 = ul3.children;
let AN = lis2[1];
let newNode = document.createElement('li');
newNode.textContent = "The sixth Sense";
ul3.insertBefore(newNode, AN);

let jp = document.createElement('li');
jp.appendChild(document.createTextNode('Jurassic Park'))
// jp.textContent = "Jurassic Park";

ul3.replaceChild(jp, newNode);

let f = ul3.cloneNode(false);
let t = ul3.cloneNode(true);
console.log(f);
console.log(t)