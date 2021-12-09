console.log('----------------------------------------------------');
console.log('Functions can be assigned to variables');
console.log('----------------------------------------------------');

let functionVariable;

function aFunction() {
  return('doing whatever')
}

functionVariable = aFunction;
console.log(functionVariable());

functionVariable = () => 'doing whatever 2'
console.log(functionVariable())


console.log('----------------------------------------------------');
console.log('Functions can passed as parameters');
console.log('----------------------------------------------------');

function impureFunction() {
  console.log('----------------------------------------------------');
  console.log('Functions can passed as parameters');
  console.log('----------------------------------------------------');
  console.log('running impureFunction')
}

setTimeout(impureFunction, 10)

function repeat(action, n) {
  for(let i=0; i<n; i++) {
    action()
  }
}

function sayHello() { console.log('Hello') }
function sayGoodbye() { console.log('Goodbye') }

repeat(sayHello, 3);
repeat(sayGoodbye, 4);


console.log('----------------------------------------------------');
console.log('Functions can be returned from other functions');
console.log('----------------------------------------------------');


function makeRepeater(n) {

  function repeatNTimes(action) {
    for(let i=0; i<n; i++) {
      action()
    }
  }

  return repeatNTimes;
}

let threeTimes = makeRepeater(3)
threeTimes(sayHello)

let fiveTimes = makeRepeater(5)
fiveTimes(sayGoodbye)
