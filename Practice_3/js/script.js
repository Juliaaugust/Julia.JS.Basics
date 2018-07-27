//console.log('You are at ' + window.location);

const bgColor = document.querySelector('.common');
console.log(bgColor);

let questBgColor = prompt('Какой будет фон у страницы?');
console.log(questBgColor);

bgColor.style['background-color'] = questBgColor;

const txtColor = document.querySelector('.myText');
console.log(txtColor);

let questTxtColor = prompt('Какой будет цвет текста на странице?');
console.log(questTxtColor);

txtColor.style['color'] = questTxtColor;