// Get a property and check something on it....
// Do more than one thing with array elements => avoids double looping


console.log('----------------------------------------------------');
console.log('Composition & pipelining');
console.log('----------------------------------------------------');

let res;
let users = [
  { id:"23", name: "John", surname: "Smith", email: "" },
  { id:"56", name: "Emmy", surname: "Noether", email: "emmy@uni-goettingen.de" },
  { id:"12", name: "Maryam", surname: "Mirzakhani", email: "maryam@stanford.edu" },
];

function pipe(...functions) {
  return function(param) {
    let result = functions[0](param);
    for(let i=1; i<functions.length; i++) {
      result = functions[i](result)
    }
    return result;
  }
}

function compose(...functions) {
  return function(param) {
    let result = functions[functions.length-1](param);
    for(let i=functions.length-2; i>=0; i--) {
      result = functions[i](result)
    }
    return result;
  }
}


const property = name => object => object[name]
const upper = string => string.toUpperCase()
const firstLetter = string => string.charAt(0)
const defaultValue = defaultValue => item => item || defaultValue

res = users.map(pipe(
    property('email'),
    defaultValue('no email'),
    upper,
    firstLetter
  )
)
console.log(res)

res = users.map(compose(
  firstLetter,
  upper,
  defaultValue('no email'),
  property('email')
)
)
console.log(res)
