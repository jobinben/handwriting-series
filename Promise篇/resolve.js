// 1. 如果解决的是值是promise则返回promise 
// 2. 如果不是则用promise.resolve
Promise.isResolve = function(value) {
    if(value instanceof Promise){
        return value
    }

    return new Promise(resolve => resolve(value))
}

// test
let p = Promise.isResolve(123)
p.then(res => {
    console.log('res: ', res)
})