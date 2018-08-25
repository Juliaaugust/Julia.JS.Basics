window.addEventListener('load', function() {
	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {
			return this.happiness+=1;
		}
		hasRest() {
			return this.happiness+=1;
		}
		hasMoney() {
			return this.happiness+=1;
		}
		isSunny() {
			const APIKey = '4818b8bc8ecf571bb94d0c3c8bda8a6c';
			const city = 'Москва';
			const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
			fetch(url)
			.then(  
			    function(response) {  
			      if (response.status !== 200) {  
			        console.log('Looks like there was a problem. Status Code: ' +  response.status);  
			        return;  
			      }

			      // Ответ: возвращаем значение температуры в консоль  
			      response.json().then(function(data) {  
			      	var tempMosk = data.main.temp - 273;
			        // console.log(data.main.temp - 273);  
			        if (tempMosk >= 15){
			        	return this.happiness+=1;
			         }
			      });
			    }
			  )  
			  .catch(function(err) {  
			    console.log('Fetch Error :-S', err);  
			  });


		}
	}

	const form = document.querySelector('form');
	form.onsubmit = function(e) {
	e.preventDefault();
	console.log('Submitted');

	const name = form.querySelector('input[name="name"]');
	const cat = form.querySelector('input[name="cat"]');
	const rest = form.querySelector('input[name="rest"]');
	const money = form.querySelector('input[name="money"]');

	var newPerson = new Person(name.value);

	if (cat.value == 'yes') {
		newPerson.hasCat();
	}
	if (rest.value == 'yes') {
		newPerson.hasRest();
	}
	if (money.value == 'yes') {
		newPerson.hasMoney();
	}
	//console.log(newPerson.isSunny());
	console.log(newPerson);

	let personName = document.querySelector('.personName');
	let icon = document.querySelector('.icon');

	personName.innerHTML = name.value + ": ";

	if (newPerson.happiness == 3) {
		icon.innerHTML = "🐰";
	}
	if (newPerson.happiness == 2) {
		icon.innerHTML = "👽";
	}
	if (newPerson.happiness == 1) {
		icon.innerHTML = "🙈";
	}
	if (newPerson.happiness == 0) {
		icon.innerHTML = "😾";
	}


	}
})