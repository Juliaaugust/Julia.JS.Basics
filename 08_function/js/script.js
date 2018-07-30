console.log('You are at ' + window.location);

function sayHi(){
	return 'Привет';
	//console.log('Привет');
}

//console.log(sayHi());
//alert(sayHi());

document.body.innerHTML = sayHi();

function sayName (name){
	return 'Привет '+ name + '!';
}

let myName = prompt('Как вас зовут?');
alert(sayName(myName));

console.log(sayName('Юля'));