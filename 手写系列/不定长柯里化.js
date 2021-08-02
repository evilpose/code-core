// 不定长 柯里化
// function curry(fn){
//   const presetArgs = [...arguments].slice(1);

//   function curried() {
//     const restArgs = [...arguments];
//     const allArgs = [...presetArgs, ...restArgs];
//     return curry.call(null, fn, ...allArgs);
//   }

//   curried.toString = function(){
//     return fn.apply(null, presetArgs);
//   }

//   return curried;
// }

// function dynamicAdd(){
//   return [...arguments].reduce((pre, curr) => {
//     return pre + curr;
//   }, 0)
// };

// var add = curry(dynamicAdd);
// console.log(add(1,2));

// function curry(func){
//   var storeArg = [...arguments].slice(1);

//   var fn = function(){
//     console.log(...arguments);
//     storeArg.push(...arguments);
//     return fn;
//   }

//   fn.toString = function(){
//     return func.apply(null, storeArg);
//   }

//   return fn;
// }
// function dynamicAdd(){
//   return [...arguments].reduce((pre, curr) => {
//     return pre + curr;
//   }, 0)
// };

// var add = curry(dynamicAdd);
// console.log(add(1,2)(2)(10));

// function add(){
//   var storeArg = [...arguments];

//   var fn = function(){
//     storeArg.push(...arguments);
//     return fn;
//   }

//   fn.toString = function(){
//     return storeArg.reduce((pre, curr) => pre + curr);
//   }

//   return fn;
// }

console.log(add(1).toString());
console.log(add(1)(2).toString());
console.log(add(1,2)(2)(3).toString());

function add(){
    var store = [...arguments];

    var fn = function() {
        store.push(...arguments);
        return fn;
    }

    fn.toString = function(){
        return store.reduce((pre, cur) => pre + cur)
    }

    return fn
}