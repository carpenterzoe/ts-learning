
// case 1   private
class Animal {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Rhino extends Animal {
    constructor() {
        super('rhino')
    }

}

class Employee {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 8) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

let animal = new Animal('Amy')
let rhino = new Rhino()
let employee = new Employee('Tom')

animal = rhino

// animal = employee  
// Animal 和 Employee 的name都为private，并非同一个


// case 2   protected
// protected属性，只能在基类和子类中访问，不能在外部实例中访问。
class Person {
    protected name: string

    // protected 修饰的 constructor只能在基类和子类中调用
    // 无法通过new调用
    protected constructor(name: string) {
        this.name = name
    }
}

class Employee1 extends Person {
    private department: string
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }
    intro() {
        return `Hello, I'm ${this.name} 
                and I work in ${this.department}.`
    }
}

let howard = new Employee1('Howard', 'Sales')
console.log(howard.intro())
// console.log(howard.name)  外部无法访问
// let john = new Person('John')    // protected 修饰的构造函数，外部实例无法调用


// case 3 readonly
class Person1 {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
let tony = new Person1('Tony')
console.log(tony.name)
// tony.name = 'Tom'  // 只读属性，外部可以访问，但是不能重新赋值

// case 4 参数属性  
// 属性少的时候可以采用这样的简写
// 属性多的时候不适合这样写，更适合单独列出来所有的属性
class Person2 {
    constructor(readonly name: string) {
        this.name = name
    }
}