let amount = document.querySelector('#amount')
let month = document.querySelector('#month')
let result = document.querySelector('.result')
let countButton = document.querySelector('.countButton')
let todolist = document.querySelector('.todo__list')
let monthDropdown = document.querySelector('.monthDropdown')
const monthsArray = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
const getResult = (amount, monthDays) => {
    result.innerText = "День 1 - " + (amount / monthDays).toFixed(2) + "с"
}

monthsArray.map(month => {
    const option = document.createElement("option")
    option.innerText = month
    monthDropdown.append(option)
})

countButton.onclick = () => {
    switch (monthDropdown.value /*month.value.toLowerCase()*/) {
        case "январь":
            getResult(amount.value, 31)
            break;
        case "февраль":
            getResult(amount.value, 29)
            break;
        case "март":
            getResult(amount.value, 31)
            break;
        case "апрель":
            getResult(amount.value, 30)
            break;
        case "май":
            getResult(amount.value, 31)
            break;
        case "июнь":
            getResult(amount.value, 30)
            break;
        case "июль":
            getResult(amount.value, 31)
            break;
        case "август":
            getResult(amount.value, 31)
            break;
        case "сентябрь":
            getResult(amount.value, 30)
            break;
        case "октябрь":
            getResult(amount.value, 31)
            break;
        case "ноябрь":
            getResult(amount.value, 30)
            break;
        case "декабрь":
            getResult(amount.value, 31)
            break;
        default:
            result.innerText = "Введите месяц"
    }
}