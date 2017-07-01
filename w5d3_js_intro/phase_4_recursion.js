let range = function (start, end) {
  let result = [start];

  if (start === end) {
    return result;
  } else {
    return result.concat(range(start + 1, end));
  }
};

// console.log(range(2, 5));


let sumRec = function (arr) {

  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
};

// console.log(sumRec([2, 4, 5, 1]));


let exponent1 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
};

let exponent2 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return Math.pow((exponent2(base, exp / 2)), 2);
  } else if (exp % 2 !== 0) {
    return (base *  Math.pow((exponent2(base, ((exp - 1) / 2))), 2));
  }
};

// console.log(exponent1(2, 5));
console.log(exponent2(2, 5));

let fibonacci = function (n) {

  if (n === 1 ) {
    return [0];
  } else if ( n === 2 ) {
    return [0,1];
  } else {
    let fibs = fibonacci(n - 1);
    let last = fibs[fibs.length - 1];
    let sec_last = fibs[fibs.length - 2];
    return fibs.concat(last + sec_last);
  }

};

console.log(fibonacci(10));
