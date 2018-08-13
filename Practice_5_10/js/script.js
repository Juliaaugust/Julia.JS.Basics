let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let colors = ['red', 'blue', 'green'];

for (cryptos of crypto) {
	 document.write("<h1>" + cryptos.name + "</h1>");
   document.write("<p>" + cryptos.price + "</p>");
   if (cryptos.name == "Bitcoin") {
      document.write("<div style=\"background-color:" + colors[0]+ "; width:" + (cryptos.price/2.4) + "px; height: 30px\"></div>");
   }
   if (cryptos.name == "Ethereum") {
      document.write("<div style=\"background-color:" + colors[1]+ "; width:"+ (cryptos.price/2.4) + "px; height: 30px\"></div>");
   }
   if (cryptos.name == "Litecoin") {
      document.write("<div style=\"background-color:" + colors[2]+ "; width:" + (cryptos.price/2.4) + "px; height: 30px\"></div>");
   }

   document.write("<br/>");
	}
