// JavaScript Scope
let car = 'Bentley';

console.log(car);

if (true) {
    console.log(car); 
    let bike = 'R15';
    console.log(bike);
    if (true) {
        let fish = 'Rui';
        console.log(fish);
    }
   // console.log(fish);
}
//console.log(bike);


function firstName() {
    let cycle = 'Duronto';
    cycle = 'Hero';
    console.log(cycle);
    console.log(car);
    // Automatically Global Variable
    person = ' Nargis diya'; // Not Recomanded
    console.log(person);

    function lastName() {
        let fruits = 'Mango';
        console.log(cycle);
        console.log(fruits);
    }
   // console.log(fruits);
    lastName();
}
firstName();
console.log(person);


let x = 100;
console.log(x);
function main() {
    let x = 10;
    console.log(x);
}
main();
console.log(x);
