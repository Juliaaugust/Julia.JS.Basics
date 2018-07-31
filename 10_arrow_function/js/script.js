console.log('You are at ' + window.location);

//ф-я пишет на страницу текст, введённый в качестве аргумента
let writeFunction = (element,text) => {
	element.innerHTML = text;
}

writeFunction(document.body, 'uuu');