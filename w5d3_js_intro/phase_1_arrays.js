Array.prototype.uniq = function() {
  let uniqueArray = [];

  this.forEach(function (el) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });

  return uniqueArray;
};

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());


Array.prototype.two_sum = function () {

    let two_sum_arr = [];

    for (let i = 0; i < this.length - 1; i ++) {
      let j = i + 1;
      if (this[i] + this[j] === 0) {
        two_sum_arr.push([i, j]);
      }
    }
    return two_sum_arr;
};

console.log([1, -1, 0, 2, -2].two_sum());

Array.prototype.transpose = function () {
  let transpose_arr = [];

  for (let i = 0; i < this.length; i++) {
    let row = [];
    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transpose_arr.push(row);
  }

  return transpose_arr;
};

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());
