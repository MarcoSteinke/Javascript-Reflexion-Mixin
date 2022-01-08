'use strict';

// Define a class which will be extended
const Halfling = function (fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
};

// Define a mixin which will be "mixed in" the halfling type
const mixin = {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  rename(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
};

// An extend function
const extend = (obj, mixin) => {
  // The mixin types keys are the instance methods defined in mixin.
  // Add those instance methods as instance methods to the obj.
  Object.keys(mixin).forEach(key => obj[key] = mixin[key]);
  return obj;
};

// Create two instances of the type which will be extended
const sam = new Halfling('Sam', 'Loawry');
const frodo = new Halfling('Freeda', 'Baggs');

// Mixin the other methods
extend(Halfling.prototype, mixin);

// After the call of "extend" the Halfling type is now extended by the methods "fullName" and "rename".
console.log(sam.fullName());  // Sam Loawry
console.log(frodo.fullName());  // Freeda Baggs

sam.rename('Samwise', 'Gamgee');
frodo.rename('Frodo', 'Baggins');

console.log(sam.fullName());  // Samwise Gamgee
console.log(frodo.fullName());  // Frodo Baggins
