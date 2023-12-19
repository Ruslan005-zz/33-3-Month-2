// DZ5.1
let numbers =  [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]
let noRepeat = numbers.filter((a,b)=> {
    return b === numbers.indexOf(a)
})
console.log(noRepeat)


// DZ5.2
let books = ['Преступление и наказание', 'Убик Филип Дип', 'Учитель шарлота', 'Улитка на склоне', 'Утонченый метвец', 'Мастер и Маргарита', 'Евгений Онегин']
let resultBooks = books.filter((book)=> book.toLowerCase().includes('у'))
console.log(resultBooks)
const [n1, n2, n3, n4, n5, ...others] = books
console.log(others)
let changeBooks = resultBooks.map((item, index)=> item + ' книга с буквой «у»»')
console.log(changeBooks)