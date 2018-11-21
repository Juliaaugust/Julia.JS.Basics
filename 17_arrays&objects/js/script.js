let me = {
	name : 'Julia',
	age : 21,
	student : true,
	languages : {
		foreign : ['English', 'Italian'],
		program : ['JavaScript', 'HTML/CSS', 'Java']
	},
	sayHello : function () { 
		return "Hello " + this.name;
	}
}

console.log(me.languages.foreign[1]);

alert(me.sayHello());





