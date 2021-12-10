
/*
find: only find one
  arr.find(callback(element[, index[, array]])[, thisArg])
  devuelve el valor del primer elemento

  - Elementos pares sean pares y los impares impares
  - Ningún elemento mayor que la longitud del array

filter: find more than one
  arr.filter(callback(currentValue[, index[, array]])[, thisArg])
  NUEVO array con los elementos que pasan el filter

every:
  arr.every(callback(element[, index[, array]])[, thisArg])
  returns true or false

some:
  arr.some(callback(element[, index[, array]])[, thisArg])
  returns true or false
*/

let data = [1,2,3,4,5,6]
let result

console.log('----------------------------------------------------');
console.log('filter()');
console.log('----------------------------------------------------');

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


function conditions(...functions) {
  return (item) => {
    for(let f of functions) {
      if(!f(item)) return false
    }
    return true;
  }
}

result = data.filter(conditions(greaterThan(3), lessThan(6)))
console.log(result)

//----------------------------
// Additional params
//----------------------------

// Get elements that are less than its position
// pos: 0 1 2  3 4 5
data = [1,2,3,-4,-5,6]
result = data.filter( (element, index) =>  element < index )
console.log(result)
