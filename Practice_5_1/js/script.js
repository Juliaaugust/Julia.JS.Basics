function randomExpMod(num){
	let exp = Math.floor(Math.random()*(10-1)+1);
	return Math.abs(num**exp);
}

console.log(randomExpMod(2));