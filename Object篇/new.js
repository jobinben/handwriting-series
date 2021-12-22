// 关键字会进行如下的操作：
// 1. 创建一个空的简单JavaScript对象（即{}）；
// 2. 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 3. 将步骤1新创建的对象作为this的上下文 ；
// 4. 如果该函数没有返回对象，则返回this。
 
function createObject(Con) {
    // 创建新对象
    const obj = Object.create(null)

    Object.setPrototypeOf(obj, Con.prototype)
    console.log('obj: ', obj)
    const res = Con.apply(obj, Array.prototype.slice.call(arguments, 1))

    return typeof(res) === 'object' ? res : obj
}


// test

function Test(name) {
    this.name = name
}

function Person(name, age) {
    this.gender = 'male'
    return {
        name,
        age
    }
}

let t = createObject(Test, 'jobin')
console.log(t)

let p = createObject(Person, 'dabing', 18)
console.log(p)


