addEventListener('message', (evt) => {
    let total = 0
    let num = evt.data
    for (let i = 0; i < 10 * 10000 * 10000; i++) {
        total += i
    }
    console.log('workder02.js 02 : ', total)
    // 最后可以把结果postMessage回去
    postMessage(total)
})