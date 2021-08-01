// promise.all 是有一个报错就全出来，要是对的话就等全对了一块输出

let PromiseAll = function(arr){
  return new Promise((resolve, reject)=>{
    let res = [];
    arr.forEach(item => {
      Promise.resolve(item).then(val => {
        res.push(val)
        if (res.length === arr.length) resolve(res)
      }).catch((beacon) => reject(beacon))
    });
  })
}

let fn1 = Promise.resolve('111')
let fn2 = Promise.resolve('222')
let fn3 = Promise.reject('333')

// PromiseAll([fn1, fn2]).then((val) => console.log(val));


