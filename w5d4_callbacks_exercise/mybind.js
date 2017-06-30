Function.prototype.myBind = function(context) {
  return () => this.apply(context);
};

Function.prototype.myBindWithArg = function(context, ...bindArgs) {
  return (...callArgs) =>
    { return this.apply(context, bindArgs.concat(callArgs)); };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
  //  console.log(...arg);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

const test = turnOn.myBindWithArg(lamp, "hi", "arg", "another");
test();
