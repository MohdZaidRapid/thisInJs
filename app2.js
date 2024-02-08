// Notes
// 1. this inside the function

class Test {
  a = 1;
  b = 2;
  c = 3;
  constructor() {
    console.log(this.a);
  }
}

const test = new Test();

// 2. This inside the class

// 3. This inside the Object
// console.log(this);

// const User = {
//   name: "John",
//   age: 24,
//   email: "zaid@gmail,com",
//   password: "slkdls",
//   hashPassword: function () {
//     this.password = "asdsdsd";
//   },
// };

// const obj = {
//   a: 1,
//   //   b: 2,
//   //   c: 3,
//   func1: function () {
//     // this.b = params;
//     const sds = () => {
//       console.log(this);
//     };
//     sds();
//   },
// };

// obj.func1();

const obj = {
  name: "John",
  age: 30,
  asd() {
    console.log(this);
  },
};

function asd() {
  console.log(this);
}

asd();
// console.log(this);
// obj.asd();
