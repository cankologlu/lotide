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

assertArrayEquals(eqArrays([1, 2, 3], [1, 3]))