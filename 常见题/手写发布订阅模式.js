// 手写发布订阅
// 发布订阅模式和观察者模式区别

// 手写发布订阅
class EventEmitter{
  constructor() {
    this.cache = {}
  }
  on(name, fn){
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn){
    if(!this.cache[name]) return
    this.cache[name] = this.cache[name].filter((item) => {
      return item !== fn;
    })
  }
  emit(name, once = false, ...args){
    if (this.cache[name]){
      for(let fn of this.cache[name]){
        fn(...args)
      }
      if(once){
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new EventEmitter();
let fn1 = function(name, age){
  console.log(`fn1, ${name}, ${age}`);
}
let fn2 = function(name, age){
  console.log(`fn2, ${name}, ${age}`);
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)
eventBus.on('aaa', fn1)


// 发布订阅模式和观察者模式区别
// 最大的区别就是，观察者模式是观察者直接观察目标对象，没有中介层。而发布订阅模式多了一个中介层，发布者和订阅者依赖于中介层，并不直接通信
// Vue的数据双向绑定就是 观察者模式