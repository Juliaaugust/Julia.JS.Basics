function haveEnough (yourMoney, yourApple, yourBread, priceApple, priceBread){
	let yourExpenses = parseInt(yourApple)*parseFloat(priceApple) + parseInt(yourBread)*parseFloat(priceBread);
	let diff = yourMoney - yourExpenses;
	if (diff>=0) {
		return(alert('Вам хватает денег на покупки'));
	} else if (diff<0) {
		return(alert('Вам не хватает денег на покупки'));
	} else {
		return (alert('Проверьте корректность введенных значений!'))
	}
}


let myMoney = prompt('Сколько у Вас с собой денег?');
let myApple = prompt('Сколько Вы купили яблок?');
let myBread = prompt('Сколько Вы купили батонов хлеба?');
let priceApple = prompt('Сколько стоит одно яблоко?');
let priceBread = prompt('Сколько стоит один батон хлеба?');

haveEnough(myMoney, myApple, myBread, priceApple, priceBread);
