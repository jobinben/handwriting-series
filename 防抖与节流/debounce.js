// 防抖: 在事件被触发n秒后再执行回调，如果在n秒内又被触发，则重新计时。
// 应用场景: 减少http请求，只发送最后一次结果的请求。比如在输入框输入搜索的关键词时。
const debounce = (fn, delay = 300) => {
    let timer = null
    
    return function () { // 不要用箭头函数实现，不然this的指向不是本身啦。
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

const inputDOM = document.getElementById('myInput')

inputDOM.addEventListener('input', debounce(function(e) {
    // 如果fn是箭头函数，this将指向windows 而不是input元素本身
    console.log('this: ', this)
    console.log('e: ', e)
    console.log('发送搜索请求')
}, 1000))

// inputDOM.addEventListener('input', (e) => {
//     console.log('this: ', this) // this 指向window
//     console.log('e: ', e)
// })

// inputDOM.addEventListener('input', function(e) {
//     console.log('this: ', this) // this 指向input元素本身
//     console.log('e: ', e)
// })


