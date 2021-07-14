// 定长 柯里化
function curry(fn){
  const argLen = fn.length;
  const presetArgs = [...arguments].slice(1);

  return function(){
    const restArgs = [...arguments];
    const allArgs = [...presetArgs, ...restArgs];

    if (allArgs.length >= argLen) {
      return fn.apply(null, allArgs)
    } else {
      return curry.call(null, fn, ...allArgs)
    }
  }
};


function fn(a, b, c){
  return a + b + c;
};

var curried = curry(fn);
console.log(curried(1,1,2));
console.log(curried(1,2)(3));