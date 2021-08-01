function flatten_es(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  };
  return arr;
}


let arr = [1,2,3,4,[3,4,5]]
console.log(...arr);
console.log([].concat(...arr));