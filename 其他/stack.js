
// 实现一: 类的实现

class Stack {
    constructor() {
        this.stack = [];
    }

    push(el) {
        this.stack.push(el);
    }

    pop() {
        return this.stack.pop();
    }

    getPeek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }

    print() {
        console.log(this.stack);
    }
}

// test

let stack = new Stack();
stack.push('hello');
stack.print();
stack.push(1);
console.log(stack.getPeek());
stack.print();
stack.clear();
stack.print();





// 实现二: 构造函数实现
function StackConstructor() {
    this.temp = [];
    this.push = function(el) {
        this.temp.push(el);
    }
    this.print = () => {
        console.log(this.temp);
    }
}

// test
let s = new StackConstructor()
// s.push(1);
// s.print();

