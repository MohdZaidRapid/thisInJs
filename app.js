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
const student = {
  name: "zaid",
  printName: function () {
    console.log(this.name);
  },
};

student.printName();

const student2 = {
  name: "Mohammad",
};

student.printName.call(student2); //value of this student

// const obj = {
//   a: 10,
//   x:fucntion() {
//     console.log(this);
//   },
// };

console.log(this);

const obj = {
  a: 10,
  x: () => {
    console.log(this); //global object
  },
};

obj.x();

// /
const obj2 = {
  a: 20,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();

// this inside dom element =>refrence element

// this inside class ,constructor
 // this is outside constructor
