//возводит модуль числа в куб
function moduleSquare(num){
	return Math.abs(num)**3
}
console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.434)); //2
console.log(Math.floor(2.994)); //2

console.log(Math.round(2.45)); //2
console.log(Math.round(2.994)); //3
//рандомное число
console.log(Math.random());

//рандомное число от 5 до 10
console.log(Math.random()*(10-5)+5);

//целые случайные числа от 5 до 10
console.log(Math.floor(Math.random()*(10-5)+5));