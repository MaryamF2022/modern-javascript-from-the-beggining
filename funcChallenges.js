// const x = 100;

// if (true) {
//     const y = 200;
//     console.log(x + y)
// }

// // console.log(x + y);

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// //console.log(i;

// if (true){
//     const a = 500;
//     const v = 600;
//     var c = 700;
// }

// console.log(c);

// function run(){
//     var d = 100;
//     console.log(d);
// }

// run();
// console.log(d)

let getCelcius = (fah) => (fah - 32) * 5 / 9

console.log(`The temprature is ${getCelcius(32)} \xB0C`)

let minMax = (array) => ({min:Math.min(...array), max:Math.max(...array)})
console.log(minMax([1, 2, 3, 4, 5]))

// ((length, width) => {
//     const result = `the area of a rectangle with a length of ${length} and a
//      width of ${width} is ${width * length}`
//     console.log(result);
// })(10, 5)
((length, width) => {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${width * length}`);
  })(10, 5);
  

console.log("Hi")

