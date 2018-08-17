class Customer {
	constructor (name) {
		this.name = name;
	};
	thanks() {
		return "Спасибо, " + this.name + "!";
	}
	buy() {
		return "Куплено";
	};
};

class childCustomer extends Customer {
	buy () {
		return "Шарик в подарок!";
	};
};

let custName = document.getElementById('custName');
let custAge = document.getElementById('custAge');
let buyBtn = document.querySelector('button');
let thx = document.getElementById('thx');
let buyNotice = document.getElementById('buyNotice');

buyBtn.onclick = function () {
	if (custAge.value<12){
		let chCust = new childCustomer(custName.value);
		thx.innerHTML = chCust.thanks();
		buyNotice.innerHTML = chCust.buy();
	} else {
		let cust = new Customer(custName.value);
		thx.innerHTML = cust.thanks();
		buyNotice.innerHTML = cust.buy();
	}
}