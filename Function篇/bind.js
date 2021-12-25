
// 正式版
Function.prototype.toBind = function() {
    // 转化为正常数组
    const args = Array.prototype.slice.call(arguments)
    // 取出第一个参数对象，
    const thisValue = args.shift()
    const fn = this // 指向自身函数 利用闭包
    const result = function() {
        fn.apply(thisValue, [...args, ...arguments])
    }
    return result
}




// test
let name = 'dabing'
let obj = {
    name: 'jobin'
}

function test(a, b, c, d) {
    console.log('test:　' + this.name)
    console.log(a, b, c, d)
    return {
        a, b
    }
}

let res = test.toBind(obj, 'AA', 'BB', 'CC')('DD')
let resTwo = test.toBind(obj, 'AA', 'BB', 'CC')
resTwo('EE')

const standard = test.bind(obj, 'aa', 'bb', 'cc')
standard('dd')

// practice 01
Function.prototype.myBind = function(thisArg) {
    thisArg = thisArg || window
    let args = Array.prototype.slice.call(arguments, 1)
    const that = this
    return function() {
        that.apply(thisArg, [...args, ...arguments])
    }
}

res = test.myBind(obj, 'A', 'B', 'C')('D')
resTwo = test.myBind(obj, 'a', 'b', 'c')
resTwo('d')