console.log('You are at ' + window.location);

var a = 'Hi';

function myFunc1(){
	a = 'hello';
	return a;
}
console.log(a); //hi

function myFunc2(){
	var b = 3;
	console.log(b);
}
//console.log(b); ERROR
myFunc2();

if(true) {
	var c = 5;
	let d = 6;
}
console.log(c);
//console.log(d); ERROR
