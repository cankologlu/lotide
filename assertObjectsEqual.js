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

const assertObjectsEqual = function (actual, expected) {
  if(eqObjects) {
    console.log("Assertion Passed: and that's cool (▀̿Ĺ̯▀̿ ̿)")
  }else {
    console.log("Assertion Failed: and that's okay, there there")
  }
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


assertObjectsEqual(shirtObject, anotherShirtObject);