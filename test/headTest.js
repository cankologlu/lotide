const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

console.log("head() returns the first element of the passed array")
assertEqual(head(["",6,7]), "");
assertEqual(head(["abc",5,6,7]), "abc");
assertEqual(head([5,6,7]), 5);
assertEqual(head([" "]), " ");
assertEqual(head([]),);