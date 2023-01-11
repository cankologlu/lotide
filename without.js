const eqArrays = function (first, second) {
  let control = true;
  for(let i = 0; i < first.length; i++) {
    if(first[i] === second[i]) {
      control = true;
    }else {
      control = false;
    }
  }return control;
}

const assertArrayEquals = function (result) {
  if(result === true)
  {
    console.log("Congratulations they are the same 🥳")
  }else {
    console.log("Not quiet the same thing they are hmm.. <(-.-)>")
  }
}

//assertArrayEquals(eqArrays([1, 2, 3], [1, 3]))

const without = function (array, unwanted) {
  let final = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== unwanted[i]) {
      final.push(array[i])
      //array.slice(i)
    }
  }return final;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(eqArrays(words, ["hello", "world", "lighthouse"]));
console.log(words)