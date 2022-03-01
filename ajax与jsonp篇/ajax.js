const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// 实现异步请求 其限制: 需要同源状态，就是同域名，同端口，同协议
const ajax = ({
    ulr = null,
    method = 'GET',
    dataType = 'JSON',
    async = true
}) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, ulr, async)
        xhr.responseType = dataType
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    let res = xhr.responseText
                    resolve(res)
                }
            }
        }

        xhr.onerror = (err) => {
            reject(err)
        }

        xhr.send()
    })
}

// 简单的ajax实现
const myAjax = (url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        // 根据readystate
        xhr.onreadystatechange = () => {
            console.log('xhr.readyState', xhr.readyState)
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 因为responseText返回的是字符串格式，如果需要JSON格式就转换一下
                    // resolve(xhr.responseText)
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(new Error('请求失败'))
                }
            }
        }
        // get请求发送null就行， 如果是post请求就发对应的数据过去
        xhr.send(null)
    })
    return promise
}

// test 
const url = 'xxx/index'
myAjax(url).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


// practice 02

const Ajax_02 = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            // success connect
            if(xhr.status === 200) {
                // response 200
                return JSON.parse(xhr.responseText);
            } else {
                return 'other http code';
            }
        }
    }

    xhr.send(null);


}