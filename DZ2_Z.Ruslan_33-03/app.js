// DZ1.1
let numbers = [34,65,67,89,9,8,23,21,10,23,28]
for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    if(num % 2 === 0){
        console.log(numbers[i])
    }
}




// DZ1.2
let cinema = {
    movie: {
        name: 'Мстители Финал',
        genres: 'боевик, фантастика ,фентези, приключени, драма, супергероика',
        directors: 'Энтони Руссо , Джо Руссо',
        operator: 'Кевин файги',
        nameCompany: 'Марвел студия ',
        money: '356 - 400 млн$ ',
        actors: 'Роберт Дауни младший, Крис Эвен, Дон чилд, Пол Рад ',
        foundingYear: 2019,
        address: {
            country: 'Америка ',
        },
    },
    cartoon: {
        name: 'Наруто',
        genres: 'Юмористическое фентези Боевые Исскуства',
        directors: 'Масаси Кисимото',
        operator: 'Хаято Дате',
        nameCompany: 'Studio Pierrot ',
        foundingYear: 1999,
        series: 500,
        address: {
            country: 'Japan',
        },
    }
}
console.log(cinema)



// DZ1.3
let number = Number(prompt('Enter numbers until 15'))
switch (number){
    case 1 :
        console.log(number + ' =  I')
        break
    case 2 :
        console.log(number + ' =  II')
        break
    case 3 :
        console.log(number + ' =  III')
        break
    case 4 :
        console.log(number + ' =  IV')
        break
    case 5 :
        console.log(number + ' =  V')
        break
    case 6 :
        console.log(number + ' =  VI')
        break
    case 7 :
        console.log(number + ' =  VII')
        break
    case 8 :
        console.log(number + ' =  VIII')
        break
    case 9 :
        console.log(number + ' =  IX')
        break
    case 10 :
        console.log(number + ' =  X')
        break
    case 11:
        console.log(number + ' =  XI')
        break
    case 12:
        console.log(number + ' =  XII')
        break
    case 13:
        console.log(number + ' =  XIII')
        break
    case 14:
        console.log(number + ' =  XIV')
        break
    case 15:
        console.log(number + ' =  XV')
        break
    default:
        console.warn('Нельзя вводить текст а числа можете ввести только до 15')
}











// DZ.1.1
// var starbucksCoffeeCompany = {
//     name:'Starbucks',
//     founding: '1971 in Washington',
//     favorites: ['Starbucks BRAZIL Blend Premium select', 'Starbucks Italian Roast', 'Starbucks ESPRESSO Dark Roast'],
//     location: 'in 75 countries',
//     founders: ['Горден Боукер', 'Зев Сигл', 'Джери Болдуин'],
//     branches: 32000,
//     products: 'coffee',
//     information:{
//         money: '107 Billion $',
//         workers: 383000,
//         site: 'starbucks.com',
//         popularity: 'The best in  the world',
//     }
// }
// console.log(starbucksCoffeeCompany)
// console.log(Object.entries(starbucksCoffeeCompany))
//
//
// // DZ1.2
// for(var i = 0; i <= 100;i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log ('fizzbuzz')
//     }else if(i % 3 === 0){
//         console.log('fizz')
//     }else if(i % 5 === 0){
//         console.log('buzz')
//     }else{
//         console.log(i)
//     }
// }
//
// // DZ1.3
// var month = prompt('Введите месяц')
// switch(month){
//     case 'Март':
//     case 'Апрель':
//     case 'Май':
//         alert('Весна')
//         break
//     case 'Июнь':
//     case 'Июль':
//     case 'Август':
//         alert('Лето')
//         break
//     case 'Сентябрь':
//     case 'Октябрь':
//     case 'Ноябрь':
//         alert('Осень')
//         break
//     case 'Декабрь':
//     case 'Январь':
//     case 'Февраль':
//         alert('Зима')
//         break
//     default:
//         alert('Существует только 12 месяцев!!!')
// }
//
//
// // DZ1.4
// var number2 = [[[[[[[[[[[2]]]]]]]]]]]
// console.log(number2[0][0][0][0][0][0][0][0][0][0][0])
//
