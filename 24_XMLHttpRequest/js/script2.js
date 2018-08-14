const APIKey = '4818b8bc8ecf571bb94d0c3c8bda8a6c';

const city = document.getElementById("city");
let weatherBtn = document.getElementById("weatherBtn");

weatherBtn.onclick = function () {
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + APIKey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status); //200
		console.log(xhr.statusText); //OK

		temp.innerHTML = "";
		press.innerHTML = "";
		desc.innerHTML = "";

		city.style.outline = "2px solid red";

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
};

