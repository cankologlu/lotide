const assertEqual = require("./assertEqual");

const eqObjects = function (object1, object2) {
if(Object.keys(object1).length !== Object.keys(object2).length) {
  return false;
}
let control = true;
for (let key in object1) {
  for (let key2 in object2) {
    if(key === key2) {
      if(object1[key] === object2[key2]) {
        control = true;
      }else {
        control = false;
      }
    }
  }
}return control;
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
console.log(eqObjects(shirtObject, anotherShirtObject));

console.log(eqObjects(shirtObject, longSleeveShirtObject));
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));

