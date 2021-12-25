// instanceof 原理: 检测构造函数的 prototype属性在这个实例对象的原型链上
// 1. 基本类型返回false
// 2. 获取对象的原型，对象原型为空时，返回false
// 3. 对象的原型等于构造函数的protoype 返回true
// 4. 循环向上原型链查找，直到原型链为null或者找到
function toInstanceof(obj, Constructor) {
    // 基本类型直接返回false
    if((typeof(obj) !== 'object' && typeof(obj) !== 'function') || obj === null){
        return false
    }
    let objProto =Object.getPrototypeOf(obj)
    while(true) {
        // 查到原型链订单，仍未查到，返回false
        if(objProto === null) return false
        // 找到相同的类型 返回true
        // 检测构造函数的 prototype属性在这个obj对象的原型链上
        if(objProto === Constructor.prototype) return true
        objProto = Object.getPrototypeOf(objProto)
    }

}

// test
let arr = new Array(4).fill(0)
console.log(arr)

console.log('arr instanceof Array:')
console.log(toInstanceof(arr, Array))
console.log('arr instanceof Object:')
console.log(toInstanceof(arr, Object))
console.log('arr instanceof Function:')
console.log(toInstanceof(arr, Function))

