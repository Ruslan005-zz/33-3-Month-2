var currentDate = 2023;
var enterDate = Number(prompt('Введите дату рождения: '));

var age = currentDate - enterDate
console.log(age)

var capital = 'Вашингтон';
var country = 'США';
var capital2 = 'Токио';
var country2 = 'Япония';
var capital3 = 'Ташкент';
var country3 = 'Узбекистан';
var capital4 = 'Киев';
var country4 = 'Украина';
var enterCountry = prompt('Введите название страны: ');
var enterCapital = prompt('Введите название столицы этой страны: ');
if(country === enterCountry &&  capital === enterCapital ){
    alert('Верно! США, Вашингтон - код 999');
}else if(country2 === enterCountry && capital2 === enterCapital){
    alert('Верно! Япония, Токио - код 888');
}else if(country3 === enterCountry && capital3 === enterCapital){
    alert('Верно! Узбекистан, Ташкент - код 777');
}else if(country4 === enterCountry && capital4 === enterCapital){
    alert('Верно! Украина, Киев - код 666');
}else{
    alert('Неверно!!!');
}




