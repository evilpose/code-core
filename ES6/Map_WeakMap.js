/**
 * Map
 * js 的 obj 只能用字符串当作键
 * Map 类似于对象，也是键值对集合，各种类型的值（包括对象）都能当作键
 * +0 -0 视为一个键
 * NaN NaN 视为一个键
 */

const m = new Map();
const o = {p: 'hello world'};
m.set(o, 'content');
// console.log(m);  // Map { { p: 'hello world' } => 'content' }
// console.log(m.size);  // 1
// console.log(m.get(o));  // content
// console.log(m.has(o));  // true
m.delete(o);
// console.log(m); // Map {}


// Map 基本用法
const map = new Map([
  ['name', '张三'],
  ['title', 'author']
]);
// console.log(map); // Map { 'name' => '张三', 'title' => 'author' }
// console.log(map.size);  // 2
// console.log(map.has('name'));   // 张三
// console.log(map.get('name'));   // true

const items = [['name', '张三'], ['title', 'author']];
const mapItems = new Map();
items.forEach(
  ([key, value]) => mapItems.set(key, value)
)
// console.log(mapItems);  // Map { 'name' => '张三', 'title' => 'author' }

// 注意：对同一个键赋值，后面的值会覆盖前面的值
const mapNew = new Map();
mapNew.set(1, 'aa').set(1, 'bb');
// console.log(mapNew.get(1));   // bb
// console.log(mapNew.get('1121212'));   // undefined 

// 注意：只有对同一对象的引用，Map结构才将其视为同一个键。
// 注意：同样的值的两个实例在Map结构中被视为两个键，简单类型值除外（数字，字符串，布尔值）
const mapA = new Map();
mapA.set(['a'], 555);
console.log(mapA.get(['a']));   // undefined

let aa = ['a'];
mapA.set(aa, 555);
console.log(mapA.get(aa));    // 555

// size 返回 Map 结构的成员总数
// set(key, value) 设置key所对应的键值，然后返回整个 Map 结构; 如果key已经优质，则键值会被更新，否则就新生成改建
// get(key) 读取key所对应的键值，表示某个键是否在 Map 数据结构中
// has(key) 返回一个布尔值，表示某个键是否在 Map 数据结构中
// delete(key)  删除某个键，返回true，如果失败，则返回false
// clear()  清空所有成员，没有返回值
// keys() 返回键名
// values() 返回键值
// entries() 返回所有成员
// forEach() 返回Map所有成员


/**
 * WeakMap
 * 没有遍历操作
 * 无法清空，不支持 clear 方法
 * key 是 对象，值可以是任何值
 */
const wm = new WeakMap();
// wm.set('abc', 123); // TypeError
wm.set({}, 123);  // OK


// 与其他数据结构互相转换
// Map 和数组互转
const myMap = new Map().set(true, 7).set({foo:3}, ['abc']);
console.log(myMap);   // Map { true => 7, { foo: 3 } => [ 'abc' ] }
let arrMap = [...myMap];
console.log(arrMap);  // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
console.log(new Map(arrMap)); // Map { true => 7, { foo: 3 } => [ 'abc' ] }

// Map和对象互转(=>obj需要Map的所有键都是字符串)
// 弱映射，WeakMap 实例不会妨碍垃圾回收，所以非常适合保存关联元数据
// 如果这里使用的是弱映射，如以下代码所示，那么当节点从 DOM 树中被删除后，垃圾回收程序就
// 可以立即释放其内存（假设没有其他地方引用这个对象）