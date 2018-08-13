const divs = document.querySelectorAll('div');
console.log(divs);

for (let i=0; i<divs.length; i++) {
	//градиент будет поворачиваться на 20 градусов после каждой итерации
	divs[i].style.backgroundImage = 'linear-gradient('+(45+i*20)+'deg, red, yellow)';

}