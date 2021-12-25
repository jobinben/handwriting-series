// promise.all的原理:
// 1. 传入一个promise数组，按数组里面的顺序执行结果，不管数组里谁快谁慢
// 2. 当全部直接完，就返回结果数组
// 3. 只要有一个reject，就直接返回reject
// 传入一个数组存放的都是promise
const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        // 检测是否为数组
        if (!Array.isArray(promises)) {
            throw new TypeError('promises must be an array')
        }

        let result = []
        let count = 0
        promises.forEach((promise, index) => {
            promise.then(
                res => {
                    result[index] = res
                    count++
                    count === promises.length && resolve(result)
                },
                err => {
                    reject(err)
                }
            )
        })
    })
}

// test
let p1 = Promise.resolve(3);
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
// let p3 = Promise.reject('xxx')

promiseAll([p1, p2]).then(
    values => {
        console.log(values) // [3, 'foo']
    },
    err => {
        console.log(err)
})