
const bgColor = document.querySelector('.common');
let questBgColor = prompt('Какой будет фон у страницы?');
bgColor.style['background-color'] = questBgColor;

const txtColor = document.querySelector('.page');
let questTxtColor = prompt('Какой будет цвет текста на странице?');
txtColor.style['color'] = questTxtColor;

const person = document.querySelector('.name');
console.log(person); //<span class="name"></span>
console.log(person.className); //name
let questPerson = prompt('Как зовут человека, который вас вдохновляет');
person.innerHTML = questPerson;

const img = document.querySelector('img');
console.log(img);
let yourImg = prompt('Введите адрес картинки');
img.setAttribute('src', yourImg);

const text = document.querySelector('.shortBio');
let yourText = prompt('Введите текст страницы');
text.innerHTML = yourText;

const shBio = document.querySelector('.shortBio');
console.log(shBio.className); //shortBio
shBio.className += ' animated';
console.log(shBio.className); //shortBio animated