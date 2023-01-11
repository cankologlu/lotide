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

assertArraysEqual([1, 2, 3], [1, 2, 3])