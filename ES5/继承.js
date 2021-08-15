{ 
  // 原型链继承
  // 缺点  1.  每个实例对引用类型的修改都会被其他的实例共享
  //       2.  在创建 Child 实例的时候无法向 Parent 传参，这样就会使得 Child 实例没办法自定义自己的属性
  function Parent(){
    this.name = ['arzh', 'arzh1']
  }

  Parent.prototype.getName = function(){
    console.log(this.name);
  }

  function Child(){
    
  }

  // 主要精髓
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;

  let arzhChild = new Child();
  // arzhChild.getName();  // [ 'arzh', 'arzh1' ]
  arzhChild.name.push('arzh2');

  let arzhChild2 = new Child();
  // arzhChild2.getName(); // [ 'arzh', 'arzh1', 'arzh2' ]
}
{
  // 借用结构函数（经典继承）
  // 优点：1. 解决了每个实例对引用类型属性的修改都会被其他的实例共享
  //      2. 子类可以向父类传参
  // 缺点：1. 无法复用父类的公共函数
  //      2. 每次子类构造实例都得执行一次父类函数
  function Parent(){
    this.names = ['arzh', 'arzh1']
  }
  function Child(){
    Parent.call(this)
  }
  let arzhChild2 = new Child();
  arzhChild2.names.push('arzh2');
  // console.log(arzhChild2.names); // [ 'arzh', 'arzh1', 'arzh2' ]

  let arzhChild3 = new Child();
  arzhChild3.names.push('arzh3');
  // console.log(arzhChild3.names); // [ 'arzh', 'arzh1', 'arzh3' ]
}
{
  // 组合继承（原型链继承和借用构造函数合并）
  /**
   * 优点：
   *      1. 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
   *      2. 子类可以向父类传参
   *      3. 可实现父类方法复用
   * 
   * 缺点：
   *      需要执行两次父类构造函数，第一次是 Child.prototype = new Parent()，
   *      第二次是 Parent.call(this, name) 造成不必要的浪费
   * 
   */
  function Parent(name){
    this.name = name;
    this.body = ['foot', 'hand']
  }

  function Child(name, age){
    Parent.call(this, name);
    this.age = age
  }

  Child.prototype = new Parent();
  Child.prototype.constructor = Child;

  let arzhChild1 = new Child('arzh1', '18');
  arzhChild1.body.push('head1');
  // console.log(arzhChild1.name, arzhChild1.age);   // arzh1 18
  // console.log(arzhChild1.body); // [ 'foot', 'hand', 'head1' ]

  let arzhChild2 = new Child('arzh2', '20');
  arzhChild2.body.push('head2');
  // console.log(arzhChild2.name, arzhChild2.age);   // arzh2 20
  // console.log(arzhChild2.body); // [ 'foot', 'hand', 'head2' ]
}
{
  // 原型式继承
  // 缺点：同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享
  function createObj(o){
    function F(){};
    F.prototype = o;
    return new F();
  }
  let person = {
    name: 'arzh',
    body: ['foot', 'hand']
  }
  let person1 = createObj(person);
  let person2 = createObj(person);

  console.log(person1.name); // arzh
  person1.body.push('head');
  console.log(person2.body);  // ['foot', 'hand', 'head']
}
{
  // 寄生式继承
  // 缺点: 同借用构造函数一样，无法复用父类函数，每次创建对象都会创建一遍方法
  function createEnhanceObj(o){
    let clone = Object.create(o);
    clone.getName = function(){
      console.log('arzh');
    };
    return clone;
  }
}
{
  // 寄生组合式继承
  // 优点: 不必为了指定子类型的原型而调用父类型的构造函数
  function inheritPrototype(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  function Parent(name){
    this.name = name;
  }

  Parent.prototype.getName = function(){
    console.log(this.name)
  }

  function Child(color){
    Parent.call(this, 'arzh');
    this.color = color;
  }

  inheritPrototype(Parent, Child);
  let arzhChild = new Child('red');
  console.log(arzhChild.name)
}
{
  // ES6 class
}