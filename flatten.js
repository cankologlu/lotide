//Loop through each element in an array
const assertArraysEqual = require("./assertArraysEqual")

const flatten = (array) => {
  let finalArray =[];
  for (let element of array) {
    if(Array.isArray(element)) {
      for (let each of element) {
        finalArray.push(each)
      }
    }else finalArray.push(element);
  }return finalArray;
}
//check if the element is an array
// if the element is not an array push the element to our final array

//if the element is an array loop inside to push the elements

console.log(flatten([1, 2, [3, 4], 5, [6]]));



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6])
