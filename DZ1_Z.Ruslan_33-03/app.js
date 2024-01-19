let month = prompt("Введите месяц в котом вы родились")
let day = Number(prompt("Введите день в котом вы родились"))
let monthEnter = 'Январь'
let monthEnter2 = 'Февраль'
let monthEnter3 = 'Март'
let monthEnter4 = 'Апрель'
let monthEnter5 = 'Май'
let monthEnter6 = 'Июнь'
let monthEnter7 = 'Июль'
let monthEnter8 = 'Август'
let monthEnter9 = 'Сентябрь'
let monthEnter10 = 'Октябрь'
let monthEnter11 = 'Ноябрь'
let monthEnter12 = 'Декабрь'
if(month === monthEnter && day <= 31 && day >= 1){
    alert(monthEnter + ' ' + day + ' - ' + 'Козерог')
}else if(month === monthEnter2 && day <= 29 && day >= 1){
    alert(monthEnter2 + ' ' + day + ' - ' + 'Водолей')
}else if(month === monthEnter3 && day <= 31 && day >= 1){
    alert(monthEnter3 + ' ' + day + ' - ' + 'Рыбы')
}else if(month === monthEnter4 && day <= 30 && day >= 1){
    alert(monthEnter4 + ' ' + day + ' - ' + 'Овен')
}else if(month === monthEnter5 && day <= 31 && day >= 1){
    alert(monthEnter5 + ' ' + day + ' - ' + 'Телец')
}else if(month === monthEnter6 && day <= 30 && day >= 1){
    alert(monthEnter6 + ' ' + day + ' - ' + 'Близнецы')
}else if(month === monthEnter7 && day <= 31 && day >= 1){
    alert(monthEnter7 + ' ' + day + ' - ' + 'Рак')
}else if(month === monthEnter8 && day <= 31 && day >= 1){
    alert(monthEnter8 + ' ' + day + ' - ' + 'Лев')
}else if(month === monthEnter9 && day <= 30 && day >= 1){
    alert(monthEnter9 + ' ' + day + ' - ' + 'Дева')
}else if(month === monthEnter10 && day <= 31 && day >= 1){
    alert(monthEnter10 + ' ' + day + ' - ' + 'Весы')
}else if(month === monthEnter11 && day <= 30 && day >= 1){
    alert(monthEnter11 + ' ' + day + ' - ' + 'Скорпион')
}else if(month === monthEnter12 && day <= 31  && day >= 1){
    alert(monthEnter12 + ' ' + day + ' - ' + ' Стрелец')
}else{
    alert('Введите верные данны, только месяц и день!!!!')
}

