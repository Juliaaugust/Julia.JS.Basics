let yourMoney = prompt('Сколько у Вас с собой денег?');
let yourApple = prompt('Сколько Вы купили яблок?');
let yourBread = prompt('Сколько Вы купили батонов хлеба?');
let priceApple = prompt('Сколько стоит одно яблоко?');
let priceBread = prompt('Сколько стоит один батон хлеба?');

let yourExpenses = parseInt(yourApple)*parseFloat(priceApple) + parseInt(yourBread)*parseFloat(priceBread);

let diff = yourMoney - yourExpenses;
document.body.innerHTML = diff>=0