const middle = function(array) {
  let result = [];
  let position = Math.floor(array.length/2);
  if(array.length < 3) {
    return [];
  }
  if(array.length % 2 === 1) {
    result.push(array[position]);
  }else {
    result.push(array[position - 1], array[position]);
  }
  return result;
}

module.exports = middle;
