const eqArrays = function (first, second) {
  if(first.length !== second.length) {
    return false;
  }
  let control = true;
  for(let i = 0; i < first.length; i++) {
    if(first[i] === second[i]) {
    control = true;
    }else {
    control = false;
    }
  }return control;
}

const assertArraysEqual = function (first, second) {
  if(eqArrays(first, second))
  {
    console.log("Congratulations they are the same 🥳")
  }else {
    console.log("Not quiet the same thing they are hmm.. <(-.-)>")
  }
}


//assertArrayEquals(eqArrays([1, 2, 3], [1, 3]))

const without = function (source, itemsToRemove) {
  let final = [];
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] !== itemsToRemove[j] && j === itemsToRemove.length - 1) {
        final.push(source[i])
      }
    }
    // if(source[i] !== itemsToRemove[i]) {
    //   final.push(source[i])
    //   //array.slice(i)
    // }
  }return final;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//console.log(words)