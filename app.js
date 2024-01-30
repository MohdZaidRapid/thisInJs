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

// strict mode
x(); //undefined
window.x(); //window

// this is strict mode -(this substitution)

// if value of this keyword is undefined or null
// this will be replaced with global object
// only in non strict mode
// this value depends on how the function is called

// this inside a object's method
// the of value this is object in current object
const obj = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};

obj.x();


