console.log('You are at ' + window.location);

//прототип зверей
let Animal = {
	canEat: true,
	hasParents: true
}

//более низкая систематическая единица
let Cow = {
	givesMilk: true,
	__proto__: Animal
}

console.log(Cow.givesMilk);
console.log(Cow.canEat);

for (key in Cow) {
	console.log(key);
}