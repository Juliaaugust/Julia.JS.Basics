/*

//обычная строка, внутри которой лежит json синтаксис
//в таком вид очень часто приходят данные из API каких-то сервисов
const apiString = '[{"city" : "Moskow","temp" : 10,"pressure" : 250},{"city" : "Miami","temp" : 28,"pressure" : 200},{"city" : "Beijing","temp" : 15,"pressure" : 210}]';

//чтобы работать с этим у себя на странице, удобно получить из этого объект
const DATA = JSON.parse(apiString);
console.log(DATA);

*/

//обратная ситуация: есть json объект, надо сделать из него строку
const apiString = JSON.stringify(DATA);
console.log(apiString); 
//получилать строка, которую удобно передавать на какой-то внешний сервер, 
//чтобы они потом могли спарсить к себе в виде объекта