let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]

//задача: вывести всех птиц и животных в консоль

//1 способ: цикл for of

for (nameArr of names) {
	for (animals of nameArr) {
		for (animal of animals) {
			console.log(animal);
		}
	}
}
//2 способ: метод forEach

names.forEach(function(nameArr){
	nameArr.forEach((animals) => {
		animals.forEach(function(animal){
			console.log(animal);
		})
	})
})