// DZ1.1
var teg = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'br'];
var repetition = {};
for (var i = 0; i < teg.length; ++i)
{
    var a = teg[i];
    if (repetition[a] != null)
        ++repetition[a];
    else
        repetition[a] = 1;
}
var object = {}
for(var i = 0; i < teg.length; i++){
    object[i] = teg[i]
    var object1 = {
        li : 3,
        div : 3,
        p : 3,
        h1 : 4,
        br : 1
    }
}
console.log(Object.entries(object1))


// DZ1.2
var nameAge = ['name', 'john', 'lastName', 'black', 'age', '23']
var obj = {}
for(var i = 0; i < nameAge.length; i++){
    obj[i] = nameAge[i]
    var obj1 = {
        name : 'john',
        lastName : 'black',
        age : '23',
    }
}
console.log(Object.entries(obj1))


// DZ1.3
function veryHard(bad){
    return console.log(typeof bad)
}
var text = 'me'
var obj22 = ['rrr']
var tru = false
veryHard('me')
veryHard(['rrr'])
veryHard(false)

