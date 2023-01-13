const takeUntil = (array, callBack) => {
  let result = [];
  for (item of array) {
    if(!callBack(item)) {
      result.push(item)
    }else {
      break;
    }
  }
  return result;
}


const people = ["hidalgo", "atahualpa", "pizarro", "huacar"]

console.log(takeUntil(people, x => x === "huacar"));