let numbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
let sum = 0
let result = 0
function total (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>0){
            sum += numbers[i]
            result++
        }
    }
    return sum / result
}

console.log(total(numbers).toFixed())




function array (newArray){
    for(let oldArray of newArray){
        if (oldArray % 2 === 0){
            sum += oldArray * oldArray
        }

    }
    return sum
}

console.log(array([2,3,45,4,6,6,7677,77,76]))



let book = []
function all (text){
    for(let i = 0; i< text.length;i++){
        let newL = text[i]
        let lowerCase = newL.toLocaleLowerCase()
        if(lowerCase.includes('t') || lowerCase.includes('a') || lowerCase.includes('o')){
            book.push(newL)
        }
    }
    return book
}

console.log(all(['text', 'book', 'banana', 'go', 'work', 'robot', 'USA', 'mike']))








// var input = document.querySelector('input')
// var plus = document.querySelector('.plus')
// var minus = document.querySelector('#minus')
// var reset = document.querySelector('#reset')
//
//
// function newColor (){
//     const value = + input.value
//     if(value > 0){
//         input.style.color = 'green'
//     }else if(value < 0){
//         input.style.color = 'red'
//     }else{
//         input.style.color = 'gray'
//     }
// }
//
//
// plus.addEventListener('click', () =>{
//     input.value++
//     newColor()
// })
// minus.addEventListener('click', () =>{
//     input.value--
//     newColor()
//
// })
// reset.addEventListener('click', () =>{
//     input.value = 0
//     newColor()
// })
