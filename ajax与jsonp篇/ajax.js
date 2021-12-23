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