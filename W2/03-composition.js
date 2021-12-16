console.log('----------------------------------------------------');
console.log('Composition & pipelining');
console.log('----------------------------------------------------');



function doble(x) { return x * 2 }
function masTres(x) { return x + 3 }

// Compose for two functions
let compose = function(g, f) {
  return x => g(f(x))
}

const c1 = compose(doble, masTres);
console.log(c1(5)) // 16 = (5+3) * 2

// Pipe for two functions
let pipe = function(f, g) {
  return x => g(f(x)) // 13 = (5*2) + 3
}

const p1 = pipe(doble, masTres)
console.log(p1(5))



// We can compose or pipe multiple functions to perform complex tasks

let res;
let users = [
  { id:"23", name: "John", surname: "Smith", email: "" },
  { id:"56", name: "Emmy", surname: "Noether", email: "emmy@uni-goettingen.de" },
  { id:"12", name: "Maryam", surname: "Mirzakhani", email: "maryam@stanford.edu" },
];

pipe = function(...functions) {
  return function(param) {
    let result = functions[0](param);
    for(let i=1; i<functions.length; i++) {
      result = functions[i](result)
    }
    return result;
  }
}

compose = function(...functions) {
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
