Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++ ) {
      console.log(callback(this[i]));
  }
};

function sayHi () {
  console.log('say hi');
}

// [1, 2, 3].myEach(sayHi);
// console.log([1, 2, 3].myEach(incrementEl));

function sayHello () {
  return 'say hello';
}

function incrementEl (el) {
  return (el + 1);
}

Array.prototype.myMap = function (callback) {
  let mapped_arr = [];
  this.myEach(el => mapped_arr.push(callback(el)));
  return mapped_arr;
};

// console.log([1, 2, 3].myMap(sayHi));
// console.log([1, 2, 3].myMap(sayHello));
// console.log([1, 2, 3].myMap(incrementEl));


Array.prototype.myReduce = function (callback, initialValue) {
let arr = this;
let sum = initialValue;
  if (!initialValue) {
    sum = this[0];
    arr = this.slice(1);
  }

  arr.myEach ( el => {
    sum = callback(sum, el);
  });
  return sum;
};

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
})); // 6
console.log([1, 2, 3].myReduce(incrementEl, 25)); // 31
