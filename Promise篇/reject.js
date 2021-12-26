Promise.isReject = function(reason) {
    return new Promise((resolve, reject) => reject(reason))
}

// test

// let p = Promise.reject('xxx')
let p1 = Promise.isReject('xxx')

p1.catch(err => {
    console.log(err)
})