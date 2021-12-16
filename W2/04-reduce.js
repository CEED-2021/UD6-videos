let res;
let data;


console.log('----------------------------------------------------');
console.log('reduce()');
console.log('----------------------------------------------------');


data = [1,2,3,4]

// Will process elements TO THE LEFT (first 4, then 3, etc.)
res = data.reduce( (element, acc) => {
  return acc + element
},0)
console.log(res)

console.log('----------------------------------------------------');
console.log('reduceRight()');
console.log('----------------------------------------------------');


data = ['hello', 'how', 'are', 'you']

// Will process elements TO THE RIGHT (first 'hello', then 'how', etc.)
res = data.reduceRight( (element, acc) => {
  return acc + ' ' + element
},'')
console.log(res)
