// generate 函数是一个状态机，封装了多个内部状态
// 执行 generate 函数会返回一个遍历器对象，可以依次遍历 generate 函数内部的每一个状态

// 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// 如果该函数没有return语句，则返回的对象的value属性值为undefined。

function* detanxGenerator() {
  yield 'detanx';
  return 'ending';
}

const dg = detanxGenerator();
console.log(dg.next());   // { value: 'detanx', done: false }
console.log(dg.next());   // { value: 'ending', done: true }
console.log(dg.next());   // { value: undefined, done: true }