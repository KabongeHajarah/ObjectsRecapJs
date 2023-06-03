// Exercises: Level 1
// Create an empty object called dog
const dog={}
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name='Puppy'
dog.legs=4
dog.color='black'
dog.bark= function (){
    return 'woof woof'
}
console.log(dog);

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());


// Set new properties the dog object: breed, getDogInfo
dog.breed='maltese'
dog.getDogInfo=function() {
    return ( `${this.name} is a ${this.color} ${this.breed}`)
}
console.log(dog.getDogInfo());

