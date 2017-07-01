Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (this[i] > this[j]) {
        let temp_i = this[i];
        this[i] = this[j];
        this[j] = temp_i;
        sorted = false;
      }
    }
  }

  return this;
};

// console.log([3, 4, 2, 5, 1].bubbleSort());

String.prototype.subStrings = function () {
  let sub_arr = [];

    for (let i = 0; i < this.length ; i++) {
      for (let j = i + 1; j <= this.length; j++){
         sub_arr.push(this.slice(i, j));
      }
    }
  return sub_arr;
};

console.log("cat".subStrings());
