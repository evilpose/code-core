/**
 * Set
 *  类似数组，但是数组成员都是唯一的，没有重复的
 *  Set 本身是一个构造函数，用来生成 Set 数据结构的
 *  不能区分 +0 -0
 *  认为 NaN 等于 NaN
 *  不能区分对象，认为两个对象总是不相等的
 *  不能区分数组，认为两个数组总是不相等的
 */

// Set 的基础和数组去重
let arr = [2,3,4,5,6,7,'1',undefined,undefined,'undefined', null, NaN, NaN, +0, -0, {}, {}, [], []];
// console.log(Array.from(new Set(arr)));  // [2,3,4,5,6,7,'1',undefined,'undefined', null, NaN, 0, {}, {}, [], []];

// 操作方法
// add 添加某个值，返回Set结构本身
// size 返回Set实例的成员总数
// delete 删除某个值，返回一个布尔值，表示删除是否成功
// has 返回一个布尔值，表示参数是否为 Set 成员
// clear 清空所有的成员 没有返回值
const S = new Set();
S.add(1).add(2).add(3);
// console.log(S.size, S);   // 3 Set { 1, 2, 3 }
S.delete(1);
// console.log(S.size, S);   // 2 Set { 2, 3 }
// console.log(S.has(2));    // true
S.clear();
// console.log(S.size, S);   // 0 Set {}

// 遍历操作
// keys() 返回键名
// values() 返回键值
// entries() 返回键值对
let set1 = new Set(['red', 'green', 'blue']).add('yellow');
for(let item of set1.keys()){
  console.log(item);  // red green blue yellow
}
for(let item of set1.values()){
  console.log(item);  // red green blue yellow
}
for(let item of set1.entries()){
  console.log(item);  // [ 'red', 'red ]  [ 'green', 'green' ]  [ 'blue', 'blue' ]  [ 'yellow', 'yellow' ]
}


/**
 * WeakSet
 * 1. WeakSet 的成员只能是对象，而不能是其他类型的值
 * 2. WeakSet 中对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，
 *    如果其他对象都不在引用该对象，那么垃圾回收机制会回收该对象所占用的内存，不考虑该对象是不是还存在 WeakSet 种。
 * 3. weakSet 不能对其元素进行迭代，并没有那么多使情景
 * 4. 没有 size 属性
 */
let weakSet = new WeakSet();
const class_1 = {},  class_2 = {};
weakSet.add(class_1);
weakSet.add(class_2);
console.log(weakSet); // WeakSet {Object {}, Object {}}
console.log(weakSet.has(class_1));  // true


// 相比于 WeakMap 实例，WeakSet 实例的用处没有那么大
// 只要 WeakSet 中任何元素从 DOM 树中被删除，垃圾回收程序就可以忽略其存在，而立即
// 释放其内存（假设没有其他地方引用这个对象）。