let arr = [5,6,7,8,9,10,1,2,3,4];

// 冒泡
function pop(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0;j < arr.length - i;j++){
      if (arr[j] > arr[j + 1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    console.log(arr);
  };
}

// pop(arr);
// console.log(arr);

// 选择排序
function selectSort(arr){
  for(let i = 0; i < arr.length; i++){
    let minIndex = i;
    for(let j = i; j < arr.length; j++){
      if (arr[minIndex] > arr[j]){
        minIndex = j;
      }
    };
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
}
selectSort(arr);
// console.log(arr);

// 快排
function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  };

  const midIndex = Math.floor(arr.length/2);
  const valArr = arr.splice(midIndex, 1);
  const midIndexVal = valArr[0];
  const left = [];
  const right = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < midIndexVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  };
  return quickSort(left).concat(midIndexVal, quickSort(right));
};

console.log(quickSort(arr));