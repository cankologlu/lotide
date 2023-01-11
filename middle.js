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

const middle = function(array) {
   let result = [];
   let position = Math.floor(array.length/2)
  // console.log("Array is:", array)
  // console.log("Array length is: ",array.length)
  // console.log("Array midpoint index is:", position )
  // console.log("Array midpoint element is:", array[position])
  if(array.length < 3){
    return [];
  }if(array.length % 2 === 1) {
    result.push(array[position])
  }else {
    result.push(array[position - 1], array[position])
  }return result;
}

console.log(middle(["one","two","three","four","five"]))
console.log(middle(["one","two","three","four"]))