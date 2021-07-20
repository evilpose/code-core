let arr = [1,1,2,2,3,3,4,4,5,5];

// 双重循环去重
function unique_for(arr){
  let res = [arr[0]];
  for(let i = 1; i < arr.length; i++){
    let flag = true;
    for(let j = 0; j < res.length; j++ ) {
      if (arr[i] === res[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  };
  return res;
}

// console.log(unique_for(arr));

// indexOf
function unique_indexOf(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if (res.indexOf(arr[i]) <= -1){
      res.push(arr[i]);
    }
  };
  return res;
};

// console.log(unique_indexOf(arr));

// obj
function unique_obj(arr){
  let res = [], obj = {};
  for(let i = 0; i < arr.length; i++ ){
    if (!obj[arr[i]]) {
      res.push(arr[i]);
      obj[arr[i]] = 1;
    }
  };
  return res;
};

// console.log(unique_obj(arr));

// filter
function unique_filter(arr){
  var res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  });
  return res;
};

// console.log(unique_filter(arr));

// reduce
function unique_reduce(arr){
  let res = arr.reduce((pre, curr) => {
    if (!pre.includes(curr)) {
      return pre.concat(curr)
    } else {
      return pre
    }
  }, []);
  return res;
}

// console.log(unique_reduce(arr));

// 排序 + 相邻元素对比
function unique_sort(arr){
  let res = [];
  arr = arr.sort();
  for(let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[i+1]) {
      res.push(arr[i]);
    }
  };
  return res;
}

// console.log(unique_sort(arr));


// Set + 数组解构
function unique_set(arr){
  return [...new Set(arr)];
}

console.log(unique_set(arr));
