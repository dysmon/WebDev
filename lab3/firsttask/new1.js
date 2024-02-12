// Is it possible to create functions A and B so that new A() == new B()? YES

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B());
