const cools = document.getElementsByClassName('cool');
console.log(cools);
console.log(cools[0]);
cools[0].innerHTML = 'I`m first!';

const divs = document.getElementsByTagName('div');
console.log(divs);

const allCool = document.querySelectorAll('.cool');
console.log(allCool);