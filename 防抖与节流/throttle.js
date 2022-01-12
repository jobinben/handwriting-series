// 节流: 在规定时间内，只执行触发一次函数。如果在这个时间内多次触发函数，只有一次生效。过了这个时间后，就执行新的操作。
// 应用场景: 拖拽，还有scroll滑动
const throttle = (fn, delay = 300) => {
    let timer = null
    let flag = true
    return function() {
        if(!flag) {
            return;
        }
        flag = false
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            flag = true
        }, delay)
    }
}

const boxDOM = document.getElementById('box')

boxDOM.addEventListener('drag', throttle(function(e) {
    console.log(e.offsetX, e.offsetY)
}, 200))

// boxDOM.addEventListener('drag', function(e) {
//     console.log(e.offsetX, e.offsetY)
// })