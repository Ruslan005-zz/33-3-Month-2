// DZ5.1
let teg =['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
let howManyTeg = {}
for(let i = 0; i <teg.length;i++){
    let allTeg = teg[i]
    if(howManyTeg.hasOwnProperty(allTeg)){
        howManyTeg[allTeg] += 1
    }else{
        howManyTeg[allTeg] = 1
    }
}
// console.log(howManyTeg)
const tagCounts = {
    'br': 1,
    'div': 3,
    'h1': 4,
    'li': 3,
    'ol': 1,
    'p': 3
};
const sortedTagCounts = Object.entries(tagCounts);

sortedTagCounts.sort((a, b) => b[1] - a[1]);
const sortedTagCountsObject = Object.fromEntries(sortedTagCounts);
console.log(sortedTagCountsObject);




function generateShortName(surname, firstName, middleName) {
    const firstInitial = firstName.charAt(0) + ".";
    const middleInitial = middleName.charAt(0) + ".";
    const shortName = `${surname} ${firstInitial}${middleInitial}`;

    return shortName;
}

const shortName = generateShortName("Айдар", "Юсупов", "БЕкмырзаевич", );
const shortNames = generateShortName( 'Зулфукааров', 'Руслан', 'Шарофидинович');
console.log(shortName);
console.log(shortNames);




// DZ5.3
let books = ['Преступление и наказание', 'Убик Филип Дип', 'Учитель шарлота', 'Улитка на склоне', 'Утонченый метвец', 'Мастер и Маргарита', 'Евгений Онегин']
let resultBooks = books.filter((book)=> book.toLowerCase().includes('у'))
console.log(resultBooks)
const [n1, n2, n3, n4, n5, ...others] = books
console.log(others)
let changeBooks = resultBooks.map((item, index)=> item + ' книга с буквой «у»»')
console.log(changeBooks)



// DZ5.4-5
const users = [
    { name: "Ruslan", birthdate: "1990-05-15" },
    { name: "Bekzat", birthdate: "1985-10-22" },
    { name: "Мария", birthdate: "1978-03-07" },
    { name: "Ainazik", birthdate: "1995-12-30" },
    { name: "Almazbek", birthdate: "1982-07-18" }
];
users.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthdate}`);
});






















// // DZ5.1
// let numbers =  [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]
// let noRepeat = numbers.filter((a,b)=> {
//     return b === numbers.indexOf(a)
// })
// console.log(noRepeat)
//
//
// // DZ5.2
// let books = ['Преступление и наказание', 'Убик Филип Дип', 'Учитель шарлота', 'Улитка на склоне', 'Утонченый метвец', 'Мастер и Маргарита', 'Евгений Онегин']
// let resultBooks = books.filter((book)=> book.toLowerCase().includes('у'))
// console.log(resultBooks)
// const [n1, n2, n3, n4, n5, ...others] = books
// console.log(others)
// let changeBooks = resultBooks.map((item, index)=> item + ' книга с буквой «у»»')
// console.log(changeBooks)