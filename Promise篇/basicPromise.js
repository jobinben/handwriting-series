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

        const resolve = (value) => {
            if (this.state === STATES.PENDING) {
                this.state = STATES.FULFILL
                console.log(value)
            }
        }
        const reject = (reason) => {
            if (this.state === STATES.PENDING) {
                this.state = STATES.REJECT
                console.log(reason)
            }
        }
        // 1.存在一个回调函数，并且立即执行该回调函数
        executor(resolve, reject)
    }

    // 要存在一个then的方法
    then(onFulfilled, onRejected) {

    }
}

const p = new BasicPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})

p.then()
