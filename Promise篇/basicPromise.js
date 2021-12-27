// 1. 手撕一个BasicPromise
// 根据Promise/A+规范来实现

const STATES = {
    PENDING: 'pending',
    FULFILL: 'fulfilled',
    REJECT: 'rejected'
}

class BasicPromise {
    constructor(executor) {
        this.state = STATES.PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = new Set()
        this.onRejectedCallbacks = new Set()

        const resolve = (value) => {
            if (this.state === STATES.PENDING) {
                this.state = STATES.FULFILL
                this.value = value
                // 实现异步
                this.onFulfilledCallbacks && this.onFulfilledCallbacks.forEach(onFulfill => {
                    onFulfill(value)
                })
            }
        }
        const reject = (reason) => {
            if (this.state === STATES.PENDING) {
                this.state = STATES.REJECT
                this.reason = reason
                // 实现异步
                this.onRejectedCallbacks && this.onRejectedCallbacks.forEach(onReject => {
                    onReject(reason)
                })
            }
        }
        // 1.存在一个回调函数，并且立即执行该回调函数
        executor(resolve, reject)
    }

    // 要存在一个then的方法
    then(onFulfilled, onRejected) {
        // 处理onFulfilled 和 onRejected为同步函数时
        if (this.state === STATES.FULFILL) {
            // 因为onFulfilled执行函数是要在新一轮的队列才开始执行: 所以回调要加个setTimeout宏任务或者其他微任务process.nextTick也行
            typeof onFulfilled === 'function' && process.nextTick(() => {
                onFulfilled(this.value)
            })

        } else if (this.state === STATES.REJECT) {
            // 因为onFulfilled执行函数是要在新一轮的队列才开始执行: 所以回调要加个setTimeout宏任务或者其他微任务process.nextTick也行
            typeof onRejected === 'function' && process.nextTick(() => {
                onRejected(this.reason)
            })
        } else {
            // 处理异步函数，把函数保存起来
            const fn1 = (value) => process.nextTick(() => onFulfilled(value))
            const fn2 = (reason) => process.nextTick(() => onRejected(reason))

            typeof onFulfilled === 'function' && (this.onFulfilledCallbacks.add(fn1))
            typeof onRejected === 'function' && (this.onRejectedCallbacks.add(fn2))
        }
    }
}

// test2

const p1 = new BasicPromise((resolve, reject) => {
    // resolve('sync resolve!!')
    setTimeout(() => {
        resolve('async resolve')
    }, 1000);
})

p1.then(res => {
    console.log('res1: ', res)
})

p1.then(res => {
    console.log('res2: ', res)
})

p1.then(res => {
    console.log('res3: ', res)
})


// test1

// setTimeout(() => {
//     console.log('setTimeout done.')
// }, 1000)

// const p = new BasicPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('async resolve')
//         // reject('async reject')
//     }, 1000)
//     // resolve('resolve')
//     // reject('reject')
// })

// p.then(
//     res => {
//         console.log('res: ', res)
//     },
//     err => {
//         console.log('err: ', err)
//     }
// )

console.log('同步任务结束')