console.log('You are at ' + window.location);

const buttons = document.querySelectorAll('button');

//цикл for of для перебора массива: обращается внутрь содержимого массива
for (button of buttons) {
	console.log(button); //HTML-код каждой кнопки
	button.style.backgroundColor = 'blue';
	button.style.color = 'white';
	button.style.borderRadius = '6px';
}

// for (key in buttons) {
// 	buttons[key].style.backgroundColor = 'pink';
// }

let person = {
	name: 'Julia',
	age: 22,
	JS_skills: true
}

//цикл for in позволяет работать не только с массивами, но и собъектами
//b перебрать все элементы объекта по ключам
for (key in person) {
	console.log(key); //выводит сами ключи: name, age, JS_skils
	console.log(person[key]); //выводи значения ключей: Julia, 22, true
}