// 柯里化

function add(){
    let arr = [...arguments];

    let fn = function(){
        arr.push(...arguments);
        return fn;
    };

    fn.toString = function(){
        return arr.reduce((pre, curr) => pre + curr);
    };

    return fn;
}

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

// class 继承
class Animal{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
};

class Dog extends Animal{
    constructor(name, age){
        super(name)
        this.age = age
    }
}

let a = new Dog('zs', 12);
// console.log(a.getName(), a.age);

// 浅拷贝
function SCopy(obj){
    if (typeof obj !== 'object')  return;
    
    let newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    };

    return newObj;
}

// 深拷贝
function DCopy(obj){
    if (typeof obj !== 'object') return;

    let newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty){
            newObj[key] = typeof newObj[key] === 'obj' ? DCopy(obj[key]) : obj[key]
        }
    };

    return newObj;
}

// 数据扁平化  flat()
function flat(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    };
    return arr;
}

// console.log(flat( [1,2,[3,[4,5]]] ));


// apply
Function.prototype.apply2 = function(context, args){
    context = context || window;
    context.fn = this;

    let res;
    if(!args){
        res = context.fn();
    } else {
        res = context.fn(...args);
    }

    delete context.fn;
    return res;
}

// Fn.apply2(obj, [1,2])

// call
Function.prototype.call2 = function(context){
    context = context || window;
    context.fn = context;

    let res = context.fn(...[...arguments].slice(1));

    delete context.fn;
    return res;
}

// bind
// Function.prototype.bind = function(context){
//     context = context || window;
//     context.fn = this;
//     let args = [...arguments];

//     return function(){
//         let res = context.fn(...(args.slice(1).concat(...arguments)));
//         delete context.fn;
//         return res;
//     }
// }

function quickSort(arr){
    if (arr.length <= 1) {
        return arr;
    };

    const midIndex = Math.floor(arr.length/2);
    const valArr = arr.splice(midIndex, 1);
    const midVal = valArr[0];
    const left = [];
    const right = [];
    for(let val of arr){
        if (val < midVal){
            left.push(val)
        } else {
            right.push(val)
        }
    };
    return quickSort(left).concat(midVal, quickSort(right));
}
let arr = [5,6,7,8,9,10,1,2,3,4];
console.log(quickSort(arr));

