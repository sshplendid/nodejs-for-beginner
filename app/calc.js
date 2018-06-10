function sum(arr) {
  var result = 0;
  arr.map(n => result += n);

  return result;
}

module.exports.sum = sum;
