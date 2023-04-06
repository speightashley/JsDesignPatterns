/* 
******************** Singleton Objects **********************************
*
* Singletons are classes that can only be created once.
*
* They are good for managing global state.
*
* The below example is a class that is used to create a counter
*
* * getInstance is a method that returns the value of the instance
* * getCount is a method that returns the current value of the counter
* * increment method that increments the counter
* * decrement method that decrements the value of the counter
*
* * NOT REALLY USED ANYMORE! IT CREATES A GLOBAL INSTANCE WHICH IS BAD!!
*
*
**************************************************************************
* */

// let counter = 0;  Commented so that below code works

class Counter {
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// The above class doesn't meet the criteria for a singleton because we can
// create more than one of them.

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance()); // Returns False

// Calling the new method above creates two distinct instances of the class

// The way to make it so that only one instance can be created is by declaring
// an instance variable. 

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    counter++;
  }

  decrement() {
    counter--;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter


// Now we can't create multiple instances of this object
//
// We can now EXPORT the Counter class from counter.js.
//
// We need to Object.freeze it so that properties can't be added
// or modified on the instance. See line 80
//
//
