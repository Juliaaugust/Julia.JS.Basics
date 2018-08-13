//для возможности изменения ключа в одном месте
const APIKey = '4818b8bc8ecf571bb94d0c3c8bda8a6c';

//для возможности изменения города в одном месте
const city = 'Miami';
//const city = 'Санкт-Петербург';
//const city = 'Москва';

//адрес, кудя я буду отправлять свой запрос
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

let xhr = new XMLHttpRequest();

//настройка запроса с помощью метода open
//указываются те настройки, которые необходимо отправить на сервер
xhr.open('GET', url, false); //false - синхронный запрос

//отправка запроса
xhr.send();

if (xhr.status != 200) {
	console.log(xhr.status); //200
	console.log(xhr.statusText); //OK
} else {
	//сервер готов передать ответ
	//получить ответ в консоль:
	var DATA = JSON.parse(xhr.responseText);
	console.log(DATA);

	let temp = document.getElementById("temp");
	let press = document.getElementById("press");
	let desc = document.getElementById("desc");
	
	temp.innerHTML = "Temperature: " + DATA.main.temp + " Kelvin (= " + Math.round(DATA.main.temp - 273) + "°C)";
	press.innerHTML = "Pressure: " + DATA.main.pressure + " mbar";
	desc.innerHTML = "Weather: " + DATA.weather[0].description;
}