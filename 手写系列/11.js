function flatten_es(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  };
  return arr;
}


let arr = [1,2,3,4,[3,4,5]]
console.log(...arr);
console.log([].concat(...arr));

class EventEmitter{
    constructor(){
        this.cacahe = {}
    }
    on(name, fn){
        if(this.cacahe[name]) {
            this.cacahe[name].push(fn)
        } else {
            this.cacahe[name] = [fn]
        }
    }
    off(name, fn){
        if(this.cacahe[name]){
            delete this.cacahe[name]
        } else {
            return
        }
    }
    emit(name, once = false, ...age){
        if(this.cacahe[name]){
            this.cacahe[name].forEach(fn => {
                fn(...age)
            });
            if(once){
                delete this.cacahe[name]
            }
        }
    }
}
let event = new EventEmitter();
let fn1 = function(name, age){
    console.log(`${name}, ${age}`);
}
event.on('aaa', fn1);
event.emit('aaa', false, 'buhe', '18')