//глобальный прототип - объект
let Users = {
	hasAccessToProfile: true,
	approved: true,
	sayHi: function () {return "Привет"}
};

//нужен конструктор, который создает этого пользователя
//т.е. функция, которая будет создавать экземпляры при ее вызове
function User (name, email, password) {
	//конструктор, который определяет по каким правилам будет создаваться новый пользователь
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
};

//создадим экземпляр
const Fedya = new User('Федя', 'fedya@example.com', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi());

function FemaleUser (name, email, password) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function () {return "Привет, " + this.name + "!\nТы зарегестрирована"}
};

const Alla = new FemaleUser('Алла', 'alla@mail.ru', 'alla111');
console.log(Alla);
console.log(Alla.sayHi());