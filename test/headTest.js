//const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

const assert = require("chai").assert;

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("returns '5' for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("returns '' for ['',6,7] ", () => {
    assert.strictEqual(head(["",6,7]), "");
  });
  it("returns abc for ['abc',5,6,7]", () => {
    assert.strictEqual(head(["abc",5,6,7]), "abc")
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]),undefined);
  });
});

