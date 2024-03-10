let movies = [
    "Alien", "Layer Cake", "Star Wars", "Star Trek",
    "Jaws", "Jurassic Park", "Gross Ponte Blank", 
    "Eternal Sunshine of the Spotless Mind", "Memento",
    "Dog Soldiers", "The Host", "Gran Torino", "Close Encounters of the Third Kind",
    "Good Will Hunting", "Casino Royale", "Almost Famous"];


let movieList;

document.addEventListener('DOMContentLoaded', init);

function init(){
    movieList = document.getElementById('movies');

    //BAD APPROACH - add new content to DOM one at a time
// movies.forEach(function(movie){
//     let li = document.createElement('li');
//     li.textContent = movie;
//     li.className = "bad"
//     movieList.appendChild(li);
// });
    
    //GOOD APPROACH -use documentFragment and update DOM once
    let df = new DocumentFragment();
    movies.forEach(movie =>{
        let li = document.createElement('li');
        let txt = document.createTextNode(movie);
        li.appendChild(txt);
        df.appendChild(li);
    })
    movieList.appendChild(df);

}