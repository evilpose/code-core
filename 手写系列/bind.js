let obj = {
  a: 1,
  b: 2,
  fn: function(d, e){
    console.log(this.a);
    console.log(d);
    // console.log(e);
  }
};
obj.fn();

let new_obj = { a: 2};
// obj.fn.call(new_obj);

Function.prototype.call2 = function(context) {
  context = context || window;
  context.fn = this;
  
  return function(){
    let res = context.fn(...[...arguments].slice(1));
    delete context.fn;
    return res;
  }
}

console.log(obj.fn.bind(new_obj, 4)());