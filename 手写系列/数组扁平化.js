// concat() 返回被连接数组的一个副本。
// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）
// 数组扁平化就是将 [1, [2, [3]]] 这种多层的数组拍平成一层 [1, 2, 3]

let arr = [1, 2, 3, [3, [4]]];

function flatten(arr){
  var res = [];
  for(let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i])
    }
  };
  return res;
};


function flatten_es6(arr){
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
    console.log(arr);

  };
  return arr;
};

console.log(flatten_es6(arr));