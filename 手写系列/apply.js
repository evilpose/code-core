let obj = {
  a: 1,
  b: 2,
  fn: function(d, e){
    console.log(this.a);
    console.log(d);
    console.log(e);
  }
};
obj.fn();

let new_obj = { a: 2};
// obj.fn.apply(new_obj, [1,2]);

Function.prototype.apply2 = function(context, args) {
  context = context || window;
  context.fn = this;

  let result;
  if (!args) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  }

  delete context.fn;
  return result;
}

obj.fn.apply2(new_obj, [1,2]);