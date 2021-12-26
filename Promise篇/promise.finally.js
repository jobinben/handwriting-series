// finally() 方法返回一个Promise。
// 在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数

Promise.prototype.myFinally = function (callback) {
    console.log('this: ', this)
    return this.then(
        function (value) {
            return Promise.resolve(callback()).then(() => {
                return value
            })
        },
        function (err) {
            return Promise.resolve(callback()).then(() => {
                throw err
            })
        }
    )
}

// test

let p = Promise.resolve(123)
p.then( res=> {
    console.log('res: ', res)
}).finally( function() {
    console.log('不管reject,还是resolve都会执行这个回调')
})

p.myFinally(function() {
    console.log('自定义的finally')
})