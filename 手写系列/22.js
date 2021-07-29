let arr = [4,5,6,7,8,1,2,3]

function ppp(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]] 
      }
    }
  }
}

// ppp(arr) n2
// console.log(arr);


// n2
function speed(arr){
  if(arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length/2);
  let midVal = arr.splice(midIndex, 1)[0];
  let right = [];
  let left = [];
  for(let val of arr){
    if(val < midVal) {
      left.push(val)
    } else {
      right.push(val)
    }
  }
  return speed(left).concat(midVal, speed(right));
}

// console.log(speed(arr));

// n2
function selectSort(arr){
  for(let i = 0; i < arr.length; i++){
    let minIndex = i;
    for(let j = i;j < arr.length;j++){
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    };
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
}

// selectSort(arr);
// console.log(arr);


class MyPromise{
  constructor(handle){
    this.resolveArr = [];
    this.rejectArr = [];
    this.state = 'pending';
    this.res;
    this.err;

    let _resolve = (res) => {
      this.state = 'fulfilled';
      this.res = res;
      this.resolveArr.forEach(callback => callback(res));
    }

    let _reject = (err) => {
      this.state = 'rejected';
      this.err = err;
      this.rejectArr.forEach(callback => callback(err));
    }

    try{
      handle(_resolve, _reject);
    } catch(err){
      _reject(err);
    }
  }

  then(thenResolve, thenReject){
    thenResolve = thenResolve instanceof Function ? thenResolve : (v) => v;
    thenReject = thenReject instanceof Function ? thenReject : (r) => r;
    return new MyPromise((nextResolve, nextReject) => {

      const _ok = () => {
        setTimeout(() => {
          try{
            let res = thenResolve(this.res);
            if (res instanceof MyPromise) {
              res.then(nextResolve, nextReject)
            } else {
              nextResolve(res);
            }
          } catch(e) {
            nextReject(e)
          } 
        });
      }

      const _no = () =>{
        setTimeout(() => {
          try{
            let res = thenReject(this.err);
            if (res instanceof MyPromise) {
              res.then(nextResolve, nextReject)
            } else {
              nextResolve(res);
            }
          } catch(e) {
            nextReject(e)
          } 
        });
      }

      switch(this.state){
        case 'fulfilled':
          _ok();
          break;
        case 'rejected':
          _no();
          break;
        default:
          this.resolveArr.push(_ok);
          this.rejectArr.push(_no);
          break;
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}


// new Promise((resolve, reject) => {
//   resolve('ss')
// }).then((res)=> {
//   console.log(res);
// })

new MyPromise((resolve, reject) => {
  resolve('ss')
}).then((res) => {
  console.log(res);
})