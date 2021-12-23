// jsonp解决跨域的一种方案
// 其原理是通过script标签的src可以执行JavaScript代码而且没有跨域限制
// 利用了script标签里面 src属性没有跨域限制来实现的
const jsonp = ({
    url,
    params,
    callbackName
}) => {
    const generateUrl = () => {
        let dataSrc = ''
        for(let key in params) {
            if(params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }

    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()
        document.body.appendChild(scriptEle)
        window[callbackName] = (data) => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
    
}

// test

// jsonp({url: 'xxx', params: {name: 'jobin'}, callbackName: 'login'})
// https://www.bilibili.com/video/xxx?name=jobin&callback=login