console.log('-----------------------------------------------------');
console.log('Functions maintain the context where they are defined');
console.log('-----------------------------------------------------');

function userRequestFor(user) {

  const URL = 'http://myweb.org?'

  return function(parameter) {
    // "user" will be "fixed" for this function
    return URL + user + '&' + parameter;
  }
}

let johnRequest = userRequestFor('john')
console.log(johnRequest('invoices'))
console.log(johnRequest('changePassword'))


console.log('-------------------------------------------------------');
console.log('All functions defined in the same context will share it');
console.log('-------------------------------------------------------');

function sharedCounter() {
  let counter = 0;

  return {
    read1: () => counter,
    read2: () => counter,
    inc: () => counter++,
    dec: () => counter--,
  }
}

let { read1, read2, inc, dec } = sharedCounter();

console.log(read1(), read2())

inc(); inc(); inc()
console.log(read1(), read2())
dec()
console.log(read1(), read2())


console.log('-------------------------------------------------------');
console.log('So this won\'t work as expected');
console.log('-------------------------------------------------------');

function wrongFunctionsCreator() {
  let i;
  let functions = []

  for(i=0; i<3; i++) {
    let f = () => i;
    functions.push(f)
  }

  return functions;
}

let [f1, f2,f3] = wrongFunctionsCreator();

console.log(f1());
console.log(f2());
console.log(f3());

console.log('-------------------------------------------------------');
console.log('But this will');
console.log('-------------------------------------------------------');

function rightFunctionsCreator() {
  let functions = []

  // There is a brand new 'i' for each iteration
  for(let i=0; i<3; i++) {
    let f = () => i;
    functions.push(f)
  }

  return functions;
}

[f1, f2,f3] = rightFunctionsCreator();

console.log(f1());
console.log(f2());
console.log(f3());
