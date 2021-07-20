// 浅拷贝 只考虑对象类型

function shallowCopy(obj) {
  if (typeof obj !== 'object') return;

  let newobj = obj instanceof Array ? [] : {};
  for(let key in obj) {
    if (obj.hasOwnProtptype(key)) {
      newobj[key] = obj[key];
    }
  };

  return newobj;
};

// 简单版的深拷贝

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  
  let newObj = obj instanceof Array ? [] : {};
  for(let key in obj) {
    if (obj.hasOwnProtptype(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  };

  return newObj;
}