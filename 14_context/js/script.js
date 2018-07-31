console.log(this);

window.onscroll = function() {
	console.log(this);
}

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
	//при нажатии на кнопку в консоли будет контекст кнопки
	console.log(this);
	this.innerHTML = 'Кнопка нажата!';
}

//особенность при работе со стрелочными ф-ями:
btn2.onclick = () => {
	//при нажатии на кнопку в консоли будет контекст окна
	console.log(this);
	this.innerHTML = 'Кнопка нажата!';
}