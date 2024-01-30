// this works  differently in strict mode and non strict mode

// this in global space

"use strict";
console.log(this); //globalObject - window ,global

// this inside a function

function x() {
  //   this;
  //   the value depends on strict and nonstrict mode
  console.log(this);
}
x();

// this is strict mode -(this substitution)

// if value of this keyword is undefined or null
// this will be replaced with global object
// only in non stric mode
