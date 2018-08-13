//для консоли (массив)
var numArr = new Array();
for (let i = 1; i<=1000; i++) {
	if ((i%6)==0) {
		numArr.push(i);
	}
}
console.log(numArr);

//вывод в документ
for (let i = 1; i<=1000; i++) {
	if ((i%6)==0) {
		document.write("<div class=\"column\">" + i + "</div><br/>");
	}
}