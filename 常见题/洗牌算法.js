// 洗牌算法 每一个都是 1/5

let arr = [1,2,3,4,5]

function shuffle(arr){
  let length = arr.length, index;
  while(length > 0) {
    index = Math.floor(Math.random() * length);
    length--
    [arr[length], arr[index]] = [arr[index], arr[length]];
  }
}

shuffle(arr);
console.log(arr);

// 2. 写1+2+....+n（递归）
function add(n){
  return n === 0 ? n : n + add(n-1)
}
// 1 2 3 4 5
console.log(add(5));