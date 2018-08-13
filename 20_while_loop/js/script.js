const items = document.getElementsByTagName('li');
console.log(items); //array (HTML Collection)

let counter = 0;

while (counter < items.length) {
	let userItem = prompt('Введите ' + parseInt(counter+1) + ' пункт');
	items[counter].innerHTML = counter + 1 + ' ' + userItem;
	counter ++;
}