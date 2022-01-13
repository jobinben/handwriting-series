// 手写深拷贝
// 1. 判断是基本类型还是对象。 2. 判断是数组还是对象。 3. 遍历赋值并递归
const deepClone = (obj) => {
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }

    let res;

    if(obj instanceof Array) {
        res = []
    } else {
        res = {}
    }

    for(let key in obj) {
        // res[key] = obj[key] // 浅拷贝
        res[key] = deepClone(obj[key]) // 这样子会把原型上的属性给赋值上去
    }

    return res
}


// test 
const oldObj = {
    name: 'jobin',
    age: 18,
    color: ['red', 'blue', 'green'],
    friends: {
        name: 'dabing'
    }
}

const newObj = deepClone(oldObj)

newObj.color[0] = 'black'
newObj.name = '大冰'
newObj.friends.name = 'jojo'

console.log('oldObj : ', oldObj)
console.log('newObj : ', newObj)