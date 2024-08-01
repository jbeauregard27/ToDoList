
let userTemp = document.getElementById("temp").value;

let fahrenheit = userTemp;
// Calculates Temperature in Celsius from Fahrenheit
let celsius = fahrenheit - 32 * 5 / 9;
//Calculates Temperature in Kelvin from Celsius
let kelvin = celsius + 273;
fahrenheit = Math.floor(fahrenheit);
//Calclulates Temperature in Newton from Celsius
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature in Fahrenheit is ${fahrenheit}`);
console.log(`The temperature in Kelvin is ${kelvin}`);
console.log(`THe temperature in Newton is ${newton}`);
