console.log('----------------------------------------------------');
console.log('Imperative way');
console.log('----------------------------------------------------');

class Dog {
  name="dog"
}

let oop_dogs = []

for(let i=0; i<5; i++) {
  oop_dogs[i] = new Dog();
}

console.log(oop_dogs)

console.log('----------------------------------------------------');
console.log('Declarative way');
console.log('----------------------------------------------------');

function dog() {
  return { name: "dog" }
}

let fp_dogs = new Array(5).fill().map( () => dog())

console.log(fp_dogs)
