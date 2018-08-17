class User {
		constructor (name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
		sayHi() {
			return "Hello " + this.name;
		};
};


class Female extends User {
	sayHi() {
		return "Привет " + this.name + "! Ты зарегестрирована";
	};
};

const Man = new User('Someone', '123@mail.ru', '12345');
console.log(Man);
console.log(Man.sayHi());

const Anya = new Female('Аня', 'annii@mail.ru', 'qwerty555');
console.log(Anya);
console.log(Anya.sayHi());