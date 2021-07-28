// 函数防抖

function success(name) {
  console.log(name);
};

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
};

const oDe = debounce(success, 1000);
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
  oDe('参数')
})

// 函数节流

const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, fn);
      flag = true;
    }, delay);
  }
};

const oDe = debounce(success, 1000);
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
  oDe('参数')
})