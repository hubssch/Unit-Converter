/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let inputButton = document.getElementById("btn")

inputButton.addEventListener("click", function(){
    
    lengthCalculator();
    volumeCalculator();
    massCalculator();
})


function lengthCalculator()
{
    let inputValue = document.getElementById("input").value
    length.innerHTML = `Length (Meter/Feet)<br/> <br/>${inputValue} meters = ${Math.round(inputValue * 3.281 * 1000) / 1000} feet | ${inputValue} feet = ${Math.round(inputValue / 3.281 * 1000) / 1000} meters`;
    
}

function volumeCalculator(){
    let inputValue = document.getElementById("input").value
    volume.innerHTML = `Volume (Liters/Galons)<br/> <br/>${inputValue} liters = ${Math.round(inputValue * 0.264 * 1000) / 1000} gallons | ${inputValue} gallons = ${Math.round(inputValue / 0.264 * 1000) / 1000} liters`
}

function massCalculator()
{
    let inputValue = document.getElementById("input").value
    mass.innerHTML += `Mass (Kilograms/Pounds)<br/> <br/>${inputValue} kilos =  ${Math.round(inputValue * 2.204 * 1000) / 1000} punds | ${inputValue} pounds = ${Math.round(inputValue / 2.204 * 1000) / 1000} kilos`
}