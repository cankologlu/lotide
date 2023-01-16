const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};


const findKey = (object1, callBack) => {
for (let keys in object1) {
  if(callBack(object1[keys]))
  return keys;
}
  return;
}



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3))









//for(let item in object1) {
  //   console.log(object1[item].stars)
  //   //console.log(object1[callBack].stars)
  //   console.log(`Callback is: ${callBack}`)
  // }



//  for(let item in object1) {
//   if(Object.values(object1[item]) === callBack) {
//     return item;
//     console.log(`callback function is: ${callBack}`)
//   }
//   console.log(`callback function is: ${callBack}`)
//   console.log(`Item is: ${item}`)
//   console.log(`Item of object is: ${Object.values(object1[item])}`)