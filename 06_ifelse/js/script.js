console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if(answer<18){
	Image.style.backgroundImage = "url(img/children.png)";
} else if(answer<=25){
	Image.style.backgroundImage = "url(img/teenager.png)";
} else if (answer<=55){
	Image.style.backgroundImage = "url(img/adult.png)";
} else if (answer <=120) {
	Image.style.backgroundImage = "url(img/old.png)";
} else {
	Image.style.backgroundImage = "url(img/nun.png)";
}