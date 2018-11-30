"use strict";

// class Person{
//     // es6 constructor
//     constructor(){
//         this.name = name;
//     }
// }
// 让我们的构造函数不可以当作一般的函数来运行
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function Person(name) {
    // 将Person 函数作为普通函数来调用
    _classCallCheck(this, Person);
    this.name = name;
}

Person('唐唐');

// es5 构造函数
// function Person(name){
//     this.name = name;
// }
// Person.prototype = {
//     sayHello:function(){
//         return this.name;
//     }
// }
// var lilei = new Person('lilei');
// console.log(lilei);
// const hanmeimei = Person('hanmeimei');
// console.log(hanmeimei)
// class Person{
//     foo = "bar";
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         return `I am ${this.name}`;
//     }
// }

// const lilei = new Person('李雷');
// console.log(lilei.sayHello());
