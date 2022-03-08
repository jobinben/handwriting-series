// 在原字符串进行模板渲染。

// 加上响应式
// 创建一个劫持函数
const reactive = (raw) => {
    // 1. Object.defineProperty()
    // Object.keys(raw).forEach(key => {
    //     let value = raw[key];
    //     // console.log('current value:', value);
    //     Object.defineProperty(raw, key, {
    //         get() {
    //             return value;
    //         },

    //         set(newValue) {
    //             if(newValue !== value) {
    //                 value = newValue
    //                 console.log('新的值: ', value);
    //             }
    //         }
    //     })
    // })
    
    // 2. 利用new Proxy()

    return new Proxy(raw, {
        get(target, key) {
            return target[key];
        },
        set(target, key, newValue) {
            if(target[key] !== newValue) {
                target[key] = newValue;
                console.log('新的值: ', target[key]);
            }
        }
    })
}

// 模板渲染函数
const renderer = (template, obj) => {
    
    let keys = new Set(), keyMap = [];
    // 1. 提取括号和key
    Object.keys(template).forEach(item => {
        keyMap.push(...template[item].match(/\{\{(.*?)\}\}/g))
    });

    // console.log(keyMap)

    // 2. 去除括号 提取key
    for(let key of keyMap) {
        keys.add(key.replace("{{", "").replace("}}",""));
    }

    // console.log(keys)

    // 3. 替换掉str的key
    for(let key of keys) {
        Object.keys(template).forEach(item => {
            template[item] = template[item].replace(`{{${key}}}`, obj[key])
        })
        
    }

}


// test

let template = reactive({
    str : '我是{{name}},是一名{{job}}。',
    str2 : '那你是{{name}}吗？？'
})
// let str = '我是{{name}},是一名{{job}}。'

let obj = {
    name: 'jobin',
    job: '前端工程师'
}

// 进行对象拦截赋值过去
// template = reactive(template)

renderer(template, obj);

console.log('str: ', template.str)
// template.str;





