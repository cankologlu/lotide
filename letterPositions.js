const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(string) {
  const results = {};
  for(let letter in string) {
    let char = string[letter];
    if(string[letter] !== " ") {
      if(!results[char]){
        results[char] = [letter]
      }else {
        results[char].push(letter)
      }
    }
  }
  return results;
}

console.log(letterPositions("potato"));

//assertArraysEqual(letterPositions("potato").e, [1]);