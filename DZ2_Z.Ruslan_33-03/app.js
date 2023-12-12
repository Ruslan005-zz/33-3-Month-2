// DZ.1.1
var starbucksCoffeeCompany = {
    name:'Starbucks',
    founding: '1971 in Washington',
    favorites: ['Starbucks BRAZIL Blend Premium select', 'Starbucks Italian Roast', 'Starbucks ESPRESSO Dark Roast'],
    location: 'in 75 countries',
    founders: ['Горден Боукер', 'Зев Сигл', 'Джери Болдуин'],
    branches: 32000,
    products: 'coffee',
    information:{
        money: '107 Billion $',
        workers: 383000,
        site: 'starbucks.com',
        popularity: 'The best in  the world',
    }
}
console.log(starbucksCoffeeCompany)
console.log(Object.entries(starbucksCoffeeCompany))


// DZ1.2
for(var i = 0; i <= 100;i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log ('fizzbuzz')
    }else if(i % 3 === 0){
        console.log('fizz')
    }else if(i % 5 === 0){
        console.log('buzz')
    }else{
        console.log(i)
    }
}

// DZ1.3
var month = prompt('Введите месяц')
switch(month){
    case 'Март':
    case 'Апрель':
    case 'Май':
        alert('Весна')
        break
    case 'Июнь':
    case 'Июль':
    case 'Август':
        alert('Лето')
        break
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        alert('Осень')
        break
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        alert('Зима')
        break
    default:
        alert('Существует только 12 месяцев!!!')
}


// DZ1.4
var number2 = [[[[[[[[[[[2]]]]]]]]]]]
console.log(number2[0][0][0][0][0][0][0][0][0][0][0])

