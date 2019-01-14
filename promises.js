
// Promise simple example
const ironhack = new Promise(function(resolve, reject) {  
    if (true) {
       resolve(true);  // fulfilled successfully
    }
    else {
       reject("It was not true");  // error, rejected
    }
 });

//////////////////////////////////////////////////////////////////////////////////////////

 // Promise all example, reject all promises after setTimeout

const pa = Promise.resolve(3);
const pb = 1337;
const pc = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, 'foo');
}); 

Promise.all([pa, pb, pc]).then(values => { 
  console.log(values); // [3, 1337, "foo"]
});

//////////////////////////////////////////////////////////////////////////////////////////

// Promise All catching error in then

Promise.all([
    new Promise(resolve => setTimeout(resolve, 1500)),
    new Promise(resolve => setTimeout(resolve, 900)),
    new Promise(resolve => setTimeout(resolve, 2200))
  ])
  .then(results => results.length.b.c)
  .then(c => console.info(c))
  .catch(err => console.error('This is the error: ', err));

//////////////////////////////////////////////////////////////////////////////////////////

  // Promise All getting results from 3 promises

Promise.all([
    new Promise(resolve => setTimeout(resolve(1), 1500)),
    new Promise(resolve => setTimeout(resolve(2), 900)),
    new Promise(resolve => setTimeout(resolve(3), 2200))
  ])
  .then(results => results)
  .then(c => console.info('This is the result ', c))
  .catch(err => console.error(err))