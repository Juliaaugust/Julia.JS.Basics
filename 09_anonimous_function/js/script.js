console.log('You are at ' + window.location);

//будет менять цвет background`а элемента, который задан на вход
let myFun = function(element, color) {
	element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');

myFun(heading, 'red');
myFun(par, 'pink');
