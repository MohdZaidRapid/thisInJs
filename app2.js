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
console.log(this);

const obj = {
  a: 1,
  //   b: 2,
  //   c: 3,
  func1: function () {
    // this.b = params;
    const sds = () => {
      console.log(this);
    };
    sds();
  },
};

obj.func1();
