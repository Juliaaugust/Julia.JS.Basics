
const form = document.forms[0];
console.log(form); //конкретный HTML-элемент (вся форма)

const formElements = document.forms[0].elements;
console.log(formElements); //коллекция (массив) со всеми input

const formAngle = document.forms[0].angle;
console.log(formAngle); //HTML-код элемента этой формы

const sinRes = document.querySelector('.sin');
const cosRes = document.querySelector('.cos');

form.onsubmit = function(e) {
	e.preventDefault();
	sinRes.innerHTML = Math.sin(form.elements.angle.value);
	cosRes.innerHTML = Math.cos(form.elements.angle.value);
}
