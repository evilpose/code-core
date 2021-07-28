// 柯里化

// function add(){
//     let arr = [...arguments];

//     let fn = function(){
//         arr.push(...arguments);
//         return fn;
//     };

//     fn.toString = function(){
//         return arr.reduce((pre, curr) => pre + curr);
//     };

//     return fn;
// }

// console.log(add(1)(2).toString());


//防抖  一顿点 只发最后一个

function debounce(fn, delay){
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// 节流  一顿点，但是人家还是按照 delay 的时间走
function throttle(fn, delay){
    let flag = true;
    return (...args) => {
        flag = false;
        if (flag) {
            setTimeout(() => {
                flag = true;
                fn.apply(this, args);
            }, delay);
        } else {
            return
        }
    }
}

