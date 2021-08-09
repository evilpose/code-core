// symbol 是 es6 的一种类型,他也是原始类型的范畴( string, number, boolean, null, undefined, symbol)

let name = Symbol('xiaoming');
// console.log(typeof name);   // symbool
let obj = {};
obj[name] = 'xhs';
// console.log(obj[name]);   // xhs



// symbol for
// 这个东西是可共享，在创建的时候会检查全局是否寻在这个key的symbol.如果存在就直接返回这个symbol,如果不存在就会创建，并且在全局注册。
// 此处所说的共享是全局性的共享，类似于global scope，是整个大环境下的共享.
{
  let uid = Symbol.for('uid');
  let object = {
    [uid] : '12345'
  };
  // console.log(object[uid]);   // 12345
  // console.log(uid);   // Symbol(uid)

  let uid2 = Symbol.for('uid');

  // console.log(uid === uid2);    // true
  // console.log(object[uid2]);    // 12345
  // console.log(uid2);            // Symbol(uid)

}


// 如果一个数据会反复使用就可以使用 Symbol.for 来定义，全局保存，得使用keyFor来读取，普通的声明不是全局的，所以用KeyFor是读取不到的
// symbol keyfor
{
  let uid = Symbol.for('uid');
  console.log(Symbol.keyFor(uid));    // uid

  let uid2 = Symbol.for('uid');
  console.log(Symbol.keyFor(uid2));   // uid

  let uid3 = Symbol('uid');
  let uid4 = Symbol('uid');
  console.log(uid3 === uid4);         // false
  console.log(uid3);                  // Symbol(uid)
  console.log(Symbol.keyFor(uid3));   // undefined
}


// symbol 不可强制转换
{
  let uid = Symbol('uid');
  // uid + ''    // 报错  
}

// obj 中 symbol key 的获取
{
  let uid = Symbol('uid');
  let obj = {
    [uid]: 'uid'
  }
  console.log(Object.keys(obj));    // []
  console.log(Object.getOwnPropertySymbols(obj));  // [ Symbol(uid) ]
}