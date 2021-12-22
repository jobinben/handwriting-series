Object.toCreate = (fn) => {
    function F(){}
    F.prototype = fn
    return new F()
}

