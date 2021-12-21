// 测试版
Function.prototype.testCall = function (thisArg) {
    // 链式调用时，隐式绑定，this此时指向test函数
    console.log(this)
    // 传入对象，在对象添加test方法 也就是添加this
    thisArg.fn = this
    console.log(thisArg)
    const args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    // console.log('args: ',args)
    thisArg.fn(...args) // 可以用解构参数给函数去执行
    delete thisArg.fn

}

// 简单版 无参数无返回 处理
Function.prototype.sCall = function (obj) {
    obj = obj || window
    obj.fn = this
    obj.fn()
    delete obj.fn
}

// 正式版 eval版
Function.prototype.isCall = function (obj) {
    obj = obj || window
    obj.fn = this
    const args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(`arguments[${i}]`)
    }
    console.log(args)
    const result = eval(`obj.fn(${args})`)
    delete obj.fn
    return result
}

// 正式版 解构版
Function.prototype.toCall = function (obj) {
    obj = obj || window
    obj.fn = this
    const args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    const result = obj.fn(...args)
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

const res = test.isCall(obj, 'AA', 'BB', 'CC')
// console.log(this.name)
// test()
// test.isCall(obj)
// test.call(obj)
console.log(res)


