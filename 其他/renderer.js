// 实现一个模板渲染函数

const renderer = (str, obj) => {

    let keys = [], keyMap;
    // 1. 提取括号和key
    keyMap = str.match(/\{\{(.*?)\}\}/g);

    // 2. 去除括号 提取key
    for(let key of keyMap) {
        keys.push(key.replace("{{", "").replace("}}",""));
    }

    // 3. 替换掉str的key
    for(let key of keys) {
        str = str.replace("{{"+key+"}}", obj[key]);
    }

    // console.log(keyMap, keys, str)

    return str;
}


let str = '我是{{name}},是一名{{job}}。'

let obj = {
    name: 'jobin',
    job: '前端工程师'
}

// test
console.log('renderer: ', renderer(str, obj));
console.log('str: ', str);

