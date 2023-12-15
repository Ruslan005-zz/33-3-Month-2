var input = document.querySelector('input')
var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var reset = document.querySelector('#reset')
function newColor (){
    const value = + input.value
    if(value > 0){
        input.style.color = 'green'
    }else if(value < 0){
        input.style.color = 'red'
    }else{
        input.style.color = 'gray'
    }
}
plus.addEventListener('click', () =>{
    input.value++
    newColor()
})
minus.addEventListener('click', () =>{
    input.value--
    newColor()
})
reset.addEventListener('click', () =>{
    input.value = 0
    newColor()
})