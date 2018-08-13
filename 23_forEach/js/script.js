const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

let fontSizeE = '1em';

// button.onclick = () => {
// 	lorems.forEach(function(lorem){
// 		lorem.style.fontSize = '30px';
// 	})
// }

//внутри forEach также можно применить стрелочную функцию
//при повторном нажатии шрифт текста возвращается

button.onclick = () => {
	if(fontSizeE == '1em') {
		lorems.forEach((lorem) => {
		lorem.style.fontSize = '2em';
		fontSizeE = '2em'
		})
	} else {
		lorems.forEach((lorem) => {
		lorem.style.fontSize = '1em';
		fontSizeE = '1em'
		})
	}	
}