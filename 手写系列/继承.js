class Animal{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name
  }
}

class Dog extends Animal{
  constructor(name, age){
    super(name);
    this.age = age;
  }
}

let a = new Dog('zd', 18);
console.log(a.name);
console.log(a.age);
console.log(a.getName());