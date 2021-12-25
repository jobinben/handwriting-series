// 顾名思义，Promse.race就是赛跑的意思，
// 意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，
// 就返回那个结果，不管结果本身是成功状态还是失败状态。

const promiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p).then(
                val => {
                    resolve(val)
                }, err => {
                    reject(err)
                })
        })
    })
}

// test
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 50, 'three');
// });

promiseRace([p1, p2]).then(
    res => {
        console.log(res)
    },
    err => {
        console.log(err)
    }
)