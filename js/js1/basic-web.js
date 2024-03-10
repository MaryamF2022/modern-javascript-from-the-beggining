// convert the array of movies into a string
let names = movies.join(", ");
console.log(names);


// find the paragraph with id "para"
let p = document.getElementById("para");
console.log(p);

// put the new string inside the paragraph
p.textContent = names;