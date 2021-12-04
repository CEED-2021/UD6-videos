console.log('----------------------------------------------------');
console.log('OOP way');
console.log('----------------------------------------------------');

class Dog {
  hunger = 100

  feed(food) {
    this.hunger = this.hunger - food
  }
}

let oop_dog = new Dog()

oop_dog.feed(10)
console.log(oop_dog)

// Different result
oop_dog.feed(10)
console.log(oop_dog)

console.log('----------------------------------------------------');
console.log('FP way');
console.log('----------------------------------------------------');


let fp_dog = { hunger: 100 }

function feed(dog, food) {
  return {
    hunger: dog.hunger - food
  }
}

console.log( feed(fp_dog, 10) )
// Same result
console.log( feed(fp_dog, 10) )

// To do as above:
console.log( feed( feed(fp_dog, 10), 10 ) )
