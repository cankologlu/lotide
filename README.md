# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cankologlu/lotide`

**Require it:**

`const _ = require('@cankologlu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* function assertArraysEqual(array1, array2) compares arrays to be identical returns assertion

* function assertEqual(param1, param2) compares two primitive data types to be identical, returns assertion

* function eqArrays(array1, array2) compares two arrays to be identical returns a boolean value

* function head(array) returns the first element of an array

* function middle(array) returns the middle element for odd numbered arrays, and sum of the middle two numbers of even numbered array

* function tail(array) removes the first element of the arguement array and returns a new array without the first element