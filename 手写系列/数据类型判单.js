/**
 *    js 中 基本数据类型 目前有 6 种
 *        String  Number  Boolean  null  undefined  Symbol
 * 
 *    引用数据类型 （复杂数据类型）
 *        Object Data funtion Array .....
 * 
 *    typeof 可以正确识别 Undefined boolean number String Symbol function 类型
 *    但是 对于其他的都会被认为 object 所以用 typeof 来判断这些数据是不准备的
 */


function typeOf(obj){
  console.log(Object.prototype.toString.call(obj));
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

console.log(typeOf([]));
console.log(typeOf({}));;
console.log(typeOf(new Date));;