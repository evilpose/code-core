// instanceOf 判断构造函数 prototype 属性是否出现在 实例的原型链上

function my_instanceOf(left, right) {
    let proto = left.__proto__;
    while(true){
        if (proto === null) return false
        if (proto === right.prototype) return true
        proto = proto.__proto__
    }
}


proto = left.__proto__
while(true){
    if(proto.__proto__ == null) return false;
    if(proto.__proto__ == right.prototype) return true;
    proto = proto.__proto__;
}