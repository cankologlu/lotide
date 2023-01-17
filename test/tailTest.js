//const assertEqual = require("../assertEqual");

const tail = require("../tail");
const assert = require("chai").assert

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns [2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
})