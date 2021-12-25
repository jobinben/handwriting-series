
// 正式版
// 思路: 
// 1. this 指向上层原型链的函数本身  
// 2. 传入的对象，在对象上创建函数，接着在链式的隐式绑定执行函数 函数的this就会指向对象
Function.prototype.toApply = function(obj) {
    obj = obj || window
    obj.fn = this
    // 把arguments参数转化为正常的数组
    const args = Array.prototype.slice.call(arguments)
    const result = obj.fn(...args[1])
    delete obj.fn
    return result
}



// test
let name = 'dabing'
let obj = {
    name: 'jobin'
}

function test(a, b, c) {
    console.log('test:　' + this.name)
    console.log(a, b, c)
    return {
        a, b
    }
}

let res = test.toApply(obj, ['AA', 'BB', 'CC'])
const standard = test.apply(obj, ['aa', 'bb', 'cc'])

console.log('res: ', res)
console.log('standard: ', standard)

// practice 01
Function.prototype.myApply = function(thisArg) {
    thisArg = thisArg || window
    thisArg.fn = this
    let args = Array.prototype.slice.call(arguments[1])
    const res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}

res = test.myApply(obj, ['AA', 'BB', 'CC'])
console.log('myApply: ', res)

