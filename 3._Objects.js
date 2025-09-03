// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(greetings.message)

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 
const me = {name: "Jasmin", age: 22}
console.log(me.name, me.age)

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};
stackOverflow.post = 1
console.log(stackOverflow.post)

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description
thisSong.about = "Just a tribute"
console.log(thisSong)

// --------------------------------------


