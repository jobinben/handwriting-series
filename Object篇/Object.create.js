// create 原理: 
// 1.创建一个空函数，空函数的原型指向该对象， 然后返回new 空函数。
Object.toCreate = (fn) => {
    function F(){}
    F.prototype = fn
    return new F()
}

// practice 01
Object.myCreate = (fn) => {
    function F(){}
    F.prototype = fn
    return new F()
}

// practice 02

Object.create_02 = (fn) => {
    function F(){}
    F.prototype = fn
    return new F()
}

// practice 03

Object.create_03 = (obj) => {
    function F(){}
    F.prototype = obj;
    return new F();
}