let obj = {
  a: 1,
  b: 2,
  fn: function(d, e){
    console.log(d);
    console.log(e);
  }
};
// obj.fn();

let new_obj = { a: 2};
// obj.fn.call(new_obj);

Function.prototype.bind2 = function(context) {
  context = context || window;
  context.fn = this;
  let args = [...arguments];
  
  return function(){
    let res = context.fn(...(args.slice(1).concat(...arguments)));
    delete context.fn;
    return res;
  }
}

console.log(obj.fn.bind2(new_obj, 3)());