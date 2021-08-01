// 1. 求数组的交集并且不要有重复的数据
// 2. json对象的key驼峰式转下划线，可以指定层级

let arr_1 = [1,2,3,4,5,6];
let arr_2 = [4,5,5,6,6,7,7];

function handle(arr_1, arr_2){
  // let add_arr = Array.from(new Set(arr_1.concat(arr_2)));
  // let res = [];
  // for(let val of add_arr){
  //   if (arr_1.includes(val) && arr_2.includes(val)) {
  //     res.push(val)
  //   }
  // }
  // return res;


  let res = [];
  for(let val of arr_1){
    if(arr_2.includes(val) && !res.includes(val)) {
      res.push(val);
    }
  }
 return res;
}

console.log(handle(arr_1, arr_2));

let str = 'aaa_bbbb_ccccc_ddddd'
console.log(
  str.replace(/_\w/g, (match) => {
    return match.replace(/_/g, '').toLocaleUpperCase()
  })
);

let str2 = 'aaaBbbbCccccDdddd';
console.log(
  str2.replace(/[A-Z]/g, (match) => {
    return '_' + match.toLocaleLowerCase()
  })
);