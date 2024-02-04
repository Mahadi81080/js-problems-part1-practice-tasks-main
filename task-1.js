// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFar(cel){
    const far = (cel*9/5)+32;
    return far;
}
const todayTemp= celToFar(36);
console.log(todayTemp);