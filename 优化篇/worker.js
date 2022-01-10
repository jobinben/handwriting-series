// 这里写b函数的处理逻辑

addEventListener('message', (evt) => {
    console.log(evt)
    let total = 0, num = evt.data
    for (let i = 0; i < num; i++) {
        total += i
    }
    console.log('worker.js 01 : ', total)
    // 最后可以把结果postMessage回去
    postMessage(total)
})