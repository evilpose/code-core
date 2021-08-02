function easeCopy(obj){
    if (typeof obj !== 'object') return;
    let res = obj instanceof obj ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProprety(key)){
            res[key] = obj[key]
        }
    };
    return res;
}

function deepCopy(obj){
    if (typeof obj !== 'object') return;
    let res = obj instanceof obj ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProprety(key)){
            res[key] = typeof obj[key] !== 'object' ? deepCopy(obj[key]) : res[key];
        }
    };
    return res;
}