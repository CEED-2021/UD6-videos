let data;
let result;

console.log('----------------------------------------------------');
console.log('filter()');
console.log('----------------------------------------------------');

/*
filter: find more than one
  arr.filter(callback(currentValue[, index[, array]])[, thisArg])
  NEW array with elements passing filter
*/

data = [1,2,3,4,5,6]

// Naïve version
//----------------------------
result = data.filter( (element) => element > 3)
console.log(result)

// Functional version
//----------------------------
function greaterThan(n) {
  return (element) => element > n
}

result = data.filter(greaterThan(3))
console.log(result)

//----------------------------
// More complex options
//----------------------------
function lessThan(n) {
  return (element) => element < n
}


function take(...functions) {
  return (item) => {
    for(let f of functions) {
      if(!f(item)) return false
    }
    return true;
  }
}

result = data.filter(take(greaterThan(3), lessThan(6)))
console.log(result)

//----------------------------
// Additional params
//----------------------------

// Get elements that are less than its position
// pos: 0 1 2  3 4 5
data = [1,2,3,-4,-5,6]
result = data.filter( (element, index) =>  element < index )
console.log(result)


// More semantic
const valueLessThanIndex = (element, index) =>  element < index

result = data.filter(valueLessThanIndex)
console.log(result)


console.log('----------------------------------------------------');
console.log('find()');
console.log('----------------------------------------------------');
/*
find: only find one
  arr.find(callback(element[, index[, array]])[, thisArg])
  returns first element that matches condition (callback returns true)
*/

const startsWith = prefix => string => string.startsWith(prefix)

data = ['tela', 'tola', 'tila', 'timo']
result = data.find(startsWith('ti'))

console.log(result)

console.log('----------------------------------------------------');
console.log('some()');
console.log('----------------------------------------------------');
/*
some:
  arr.some(callback(element[, index[, array]])[, thisArg])
  returns true or false
*/

data = ['tela', 'tola', 'tila', 'timo']
console.log(data.some(startsWith('to')))
console.log(data.some(startsWith('fo')))


console.log('----------------------------------------------------');
console.log('every()');
console.log('----------------------------------------------------');
/*
every:
  arr.every(callback(element[, index[, array]])[, thisArg])
  returns true or false
*/

data = ['tela', 'tola', 'tila', 'timo']
console.log(data.every(startsWith('to')))
console.log(data.every(startsWith('t')))


