
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

const res = test.toBind(obj, 'AA', 'BB', 'CC')('DD')
const resTwo = test.toBind(obj, 'AA', 'BB', 'CC')
resTwo('EE')

const standard = test.bind(obj, 'aa', 'bb', 'cc')
standard('dd')