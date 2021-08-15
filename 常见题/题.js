// 1. 求数组的交集并且不要有重复的数据
// 2. json对象的key驼峰式转下划线，可以指定层级
// 3. 给一个有序数组和无序数组， 把无序数组有序插入有序数组中
// 4. 闭包循环输出1，2，3，4，5

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

function reserverList(head){
  let pre = null, curr = head;
  while(curr){
    const next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  };
  return pre;
}

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

// 给一个有序数组和无序数组， 把无序数组有序插入有序数组中
let arr_h = [2,4,5,7];
let arr_n = [3,1,6];

function handle(arr, arr_s){
  let inset = (arr, m) => {
    let lastIndex = arr.length - 1;
    while(m < arr[lastIndex] ){
      arr[lastIndex + 1] = arr[lastIndex];
      lastIndex--
    }
    arr[lastIndex+1] = m;
  }
  for(let val of arr_s){
    inset(arr, val)
  }
}

handle(arr_h,arr_n);
console.log(arr_h)

function out(n){
  let num = 0;
  let fn = function() {
    console.log(num);
    num++;
  }
  return fn;
}
let f = out(5);
for(var i = 0; i < 5; i++){
  f()
}

var rightSideView = function(root) {
  //二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [], queue = [];
    queue.push(root);
    while(queue.length&&root){
        let length = queue.length;
        while(length--){
            node = queue.shift();
            if(!length){
                res.push(node.val)
            }
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
    }
    return res;
};


// 合并两个有序的数组
// [1,2,3]   [3,4,5,6]
let mer_a = [1,2,3,0,0,0]
let mer_b = [2,5,6]
var merge = function(nums1, m, nums2, n) {
  let num = [];
  for(let i = 0; i<m; i++) {
      num[i] = nums1[i];
  }
  let p1 = 0, p2 = 0, index = 0;
  while(index < m + n){
      if(p1 < m && p2 < n){
        nums1[index++] = num[p1] < nums2[p2] ? num[p1++] : nums2[p2++];
      }else{
        nums1[index++] = p1 < m ? num[p1++] : nums2[p2++]
      }
  };
  return nums1;
};
console.log('------');
// console.log(merge(mer_a, 3, mer_b, 3));

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