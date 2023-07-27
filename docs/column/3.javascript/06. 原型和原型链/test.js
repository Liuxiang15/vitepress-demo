function A () { 

}
let a = new A()
// console.log(a.__proto__.__proto__ === Object.prototype)
// console.log(a.__proto__.__proto__.__proto__ )
// 构造函数A的原型对象也是一个对象，所以指向Object.prototype
console.log(A.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)