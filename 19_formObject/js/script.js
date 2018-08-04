const form = document.forms;
console.log(form); //коллекция из всех форм на странице (массив)

const form0 = document.forms[0];
console.log(form0); //конкретный HTML-элемент

const formElements = document.forms[0].elements;
console.log(formElements); //коллекция (массив) со всеми input

const formQuant = document.forms[0].quantity;
console.log(formQuant); //HTML-код этой формы

//результат расчета
const insert = document.querySelector('.total');

form0.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = form0.elements.quantity.value * form0.elements.price.value;
}