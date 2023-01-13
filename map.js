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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array,callBack) => {
  let result = [];
  for (let item of array){
    result.push(callBack(item))
}
  return result
}
console.log(map(words, word => word[0]))

console.log(assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]),)