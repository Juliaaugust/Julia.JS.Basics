const form = document.querySelector('form');

/*
form.onsubmit = function() {
	console.log('Submitted');
	//при нажатии кнопки фраза мигнёт в консоли и сразу пропадёт
}
*/

form.onsubmit = function(e) {
	e.preventDefault();
	//отменя дефолтного поведения
	//Можно писать скрипт дальше, страница не перезагрузится
	console.log('Submitted');
}