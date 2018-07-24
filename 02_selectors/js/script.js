console.log('You are at ' + window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.myClass1.myClass2');
const firstBySelector = document.querySelector('div');
console.log(allBySelector);
console.log(firstBySelector);

const question = prompt('Что хотите написать на странице?')

byId.innerHTML = question;
firstBySelector.innerHTML = "<h1>Hello I`m first with selector</h1>";