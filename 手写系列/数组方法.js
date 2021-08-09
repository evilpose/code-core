let arr = [1,2,3,4,5,6,7]
// arr.forEach(function(currentValue, index, array){ console.log(item) }, thisArg);

// foreach 参数 currentValue 当前正在处理的元素 index 正在处理的元素的索引 array 正在操纵的数组 thisArg 执行回调函数用作this的值
Array.prototype.my_forEach = function(callback, thisArg) {
    const O = Object(this);
    const len = O.length >>> O;
    let k = 0;
    while(k < len) {
        if (k in O) {
            callback.call(thisArg, O[k], k, O)
        };
        k++;
    }
}
arr.my_forEach(function(item){
    console.log(item)
});


// map 参数和 foreach 一样
Array.prototype.my_map = function(callback, thisArg) {
    const O = Object(this);
    const len = O.length >>> O;
    let k = 0, res = [];
    while(k < len) {
        if (k in O) {
            res[k] = callback.call(thisArg, O[k], k, O);
        };
        k++;
    };
    return res;
}
let newMapArr = arr.my_map(function(item){
    return item * item;
});
console.log(newMapArr);


// filter 参数和 foreach 一样
Array.prototype.my_filter = function(callback, thisArg) {
    const O = Object(this);
    const len = O.length >>> O;
    let k = 0, res = [];
    while(k < len) {
        if (callback.call(thisArg, O[k], k, O)) {
            res.push(O[k]);
        };
        k++;
    };
    return res;
}
let newFilterArr = arr.my_filter(item => item > 4);
console.log(newFilterArr);


// some 参数和 foreach 一样s
Array.prototype.my_some = function(callback, thisArg) {
    const O = Object(this);
    const len = O.length >>> O;
    let k = 0, res = [];
    while(k < len) {
        if (callback.call(thisArg, O[k], k, O)) {
            return true;
        };
        k++;
    };
    return false;
}
console.log(arr.my_some(item => item%4 === 0));


/** reduce
    pre     累计器累计回调的返回值; 它是上一次调用回调时返回的累积值
    curr    数组中正在处理的元素
    index   数组中正在处理元素的索引
    array   调用 reduce 数组
    initialValue    作为第一次调用 callback函数时的第一个参数的值， 如果没有提供初始值，则将使用数组中的第一个元素
**/
const reduce_sum = arr.reduce((pre, curr, index, array) => pre + curr , 0);
console.log(reduce_sum);

Array.prototype.my_reduce = function(callback, initialValue) {
    const O = Object(this)
    const len = O.length >>> 0
    let k = 0, acc
    
    if (arguments.length > 1) {
        acc = initialValue
    } else {
        acc = O[k++]
    }

    while (k < len) {
        if (k in O) {
            acc = callback(acc, O[k], k, O)
        }
        k++
    }
    return acc
}

const my_reduce_sum = arr.my_reduce((pre, curr, index, array) => pre + curr);



// [1,2,3] => [1,2,4]
var plusOne = function(digits) {
    let len = digits.length;
    // 从后面往前遍历数组,判断9的情况
    for(let i = len-1;i>=0;i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits;
        }
    }
    // 如果全部都是9,建立新的数组
    let newDigits = [1].concat(digits);
    return newDigits;
}
  
console.log('x-x-x-x-x-x-x-x-');
console.log(plusOne([1,2,3]));
console.log(plusOne([0,0,1]));
console.log(plusOne([0,0,9]));
console.log(plusOne([9,9,9]));