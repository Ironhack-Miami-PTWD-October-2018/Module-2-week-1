// let , const

// this will not work:

for (let i = 1; i <= 30; i++) {
    console.log("Iteration number: " + i);
  }
  
  console.log("After the loop", i);

// this will work:


for (var j = 1; j <= 30; j++) {
    console.log("Iteration number: " + j);
  }
  
  console.log("After the loop", j);

// Reason, the `var` does not respect scopes 
// and is available anywhere on the code 

////////////////////////////////////////////////////////////////////////

// Javascript will always look for a variable in the local scope
// if its not found it will look on all upper scopes

y = () => {
    if (true) {
      console.log("Name inside if statement: " + name);
    }
    
    console.log("Name outside if statement: " + name);
}
let name = "Ironhacker";

//////////////////////////////////////////////////////////////////////////////////////////

const TAX_RATE = 0.7; // always use capital on constants

let apple = {
  color: 'red',
  price: 5
}

let orange = {
  color: 'orange',
  price: 4
}

function finalPrice(fruit){
    return fruit.price + (fruit.price * TAX_RATE);
}

//////////////////////////////////////////////////////////////////////////////////////////

// To be able to destructure the variable you are destructuring 
// from needs to be defined, otherwise you will run into a run 
// time execution error.
// In this case removing `town: {superName}` will fix the error


const person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal",
    address: {
      street: "Super Cool St",
      number: 123,
      city: "Miami"
    }
  };
  
  let {
    name,
    age,
    favoriteMusic,
    address: {street, city, number},
    town: {superName}
  } = person;
  
  // Variable with a super long name for clarity
  console.log(street);

//////////////////////////////////////////////////////////////////////////////////////////

// Spread and rest parameter with a soccer team example

const team = ['Messi', 'Luiz', 'Arturo', 'Ivan'];
const [captain, ...rest] = team;

// Result will be captain = Messi and the rest of the players
// on the rest variable
